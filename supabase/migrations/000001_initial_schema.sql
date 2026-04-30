create schema if not exists private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  system_role text not null default 'user'
    check (system_role in ('user', 'support', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member'
    check (role in ('owner', 'admin', 'member')),
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table if not exists public.plans (
  id text primary key,
  name text not null,
  monthly_credits integer not null default 0,
  stripe_price_lookup_key text,
  features jsonb not null default '[]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  plan_id text references public.plans(id),
  stripe_customer_id text,
  stripe_subscription_id text,
  status text not null default 'none'
    check (
      status in (
        'trialing',
        'active',
        'past_due',
        'canceled',
        'incomplete',
        'none'
      )
    ),
  current_period_ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id)
);

create table if not exists public.credit_ledger (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  amount integer not null,
  reason text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.ads (
  id uuid primary key default gen_random_uuid(),
  external_id text not null,
  network text not null check (network in ('meta', 'google', 'tiktok')),
  provider text not null check (provider in ('scrapecreators', 'adlibrary')),
  advertiser_name text not null,
  advertiser_external_id text,
  headline text,
  body text,
  cta text,
  landing_page_url text,
  display_url text,
  media jsonb not null default '[]'::jsonb,
  status text not null default 'unknown'
    check (status in ('active', 'inactive', 'unknown')),
  first_seen_at timestamptz,
  last_seen_at timestamptz,
  raw_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, network, external_id)
);

create table if not exists public.saved_ads (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  ad_id uuid not null references public.ads(id) on delete cascade,
  notes text,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  unique (workspace_id, ad_id)
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  description text,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.collection_ads (
  collection_id uuid not null references public.collections(id) on delete cascade,
  saved_ad_id uuid not null references public.saved_ads(id) on delete cascade,
  added_by uuid not null references public.profiles(id),
  added_at timestamptz not null default now(),
  primary key (collection_id, saved_ad_id)
);

create table if not exists public.ai_runs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  capability text not null
    check (
      capability in (
        'ad-analysis',
        'landing-page-analysis',
        'copy-generation',
        'image-generation',
        'video-generation',
        'landing-page-generation'
      )
    ),
  status text not null default 'queued'
    check (status in ('queued', 'running', 'succeeded', 'failed')),
  input jsonb not null default '{}'::jsonb,
  output jsonb,
  credits_spent integer not null default 0,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists workspaces_owner_id_idx on public.workspaces(owner_id);
create index if not exists workspace_members_user_id_idx
  on public.workspace_members(user_id);
create index if not exists credit_ledger_workspace_id_created_at_idx
  on public.credit_ledger(workspace_id, created_at desc);
create index if not exists ads_network_provider_idx
  on public.ads(network, provider);
create index if not exists saved_ads_workspace_id_idx
  on public.saved_ads(workspace_id);
create index if not exists collections_workspace_id_idx
  on public.collections(workspace_id);
create index if not exists ai_runs_workspace_id_created_at_idx
  on public.ai_runs(workspace_id, created_at desc);

create or replace function private.is_workspace_member(
  target_workspace_id uuid,
  target_user_id uuid
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = target_workspace_id
      and wm.user_id = target_user_id
  );
$$;

create or replace function private.is_workspace_admin(
  target_workspace_id uuid,
  target_user_id uuid
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.workspace_members wm
    where wm.workspace_id = target_workspace_id
      and wm.user_id = target_user_id
      and wm.role in ('owner', 'admin')
  );
$$;

alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.plans enable row level security;
alter table public.subscriptions enable row level security;
alter table public.credit_ledger enable row level security;
alter table public.ads enable row level security;
alter table public.saved_ads enable row level security;
alter table public.collections enable row level security;
alter table public.collection_ads enable row level security;
alter table public.ai_runs enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "workspaces_select_member"
  on public.workspaces for select
  to authenticated
  using (private.is_workspace_member(id, (select auth.uid())));

create policy "workspaces_insert_owner"
  on public.workspaces for insert
  to authenticated
  with check ((select auth.uid()) = owner_id);

create policy "workspace_members_select_member"
  on public.workspace_members for select
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())));

create policy "workspace_members_insert_initial_owner"
  on public.workspace_members for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and role = 'owner'
    and exists (
      select 1
      from public.workspaces w
      where w.id = workspace_id
        and w.owner_id = (select auth.uid())
    )
  );

create policy "workspace_members_manage_admin"
  on public.workspace_members for all
  to authenticated
  using (private.is_workspace_admin(workspace_id, (select auth.uid())))
  with check (private.is_workspace_admin(workspace_id, (select auth.uid())));

create policy "plans_select_authenticated"
  on public.plans for select
  to authenticated
  using (active = true);

create policy "subscriptions_select_member"
  on public.subscriptions for select
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())));

create policy "credit_ledger_select_member"
  on public.credit_ledger for select
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())));

create policy "ads_select_authenticated"
  on public.ads for select
  to authenticated
  using (true);

create policy "saved_ads_member_access"
  on public.saved_ads for all
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())))
  with check (private.is_workspace_member(workspace_id, (select auth.uid())));

create policy "collections_member_access"
  on public.collections for all
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())))
  with check (private.is_workspace_member(workspace_id, (select auth.uid())));

create policy "collection_ads_member_access"
  on public.collection_ads for all
  to authenticated
  using (
    exists (
      select 1
      from public.collections c
      where c.id = collection_id
        and private.is_workspace_member(c.workspace_id, (select auth.uid()))
    )
  )
  with check (
    exists (
      select 1
      from public.collections c
      where c.id = collection_id
        and private.is_workspace_member(c.workspace_id, (select auth.uid()))
    )
  );

create policy "ai_runs_member_access"
  on public.ai_runs for all
  to authenticated
  using (private.is_workspace_member(workspace_id, (select auth.uid())))
  with check (private.is_workspace_member(workspace_id, (select auth.uid())));

grant usage on schema public to authenticated, service_role;

grant select, update on table public.profiles to authenticated;
grant select, insert, update on table public.workspaces to authenticated;
grant select, insert, update, delete on table public.workspace_members to authenticated;
grant select on table public.plans to authenticated;
grant select on table public.subscriptions to authenticated;
grant select on table public.credit_ledger to authenticated;
grant select on table public.ads to authenticated;
grant select, insert, update, delete on table public.saved_ads to authenticated;
grant select, insert, update, delete on table public.collections to authenticated;
grant select, insert, update, delete on table public.collection_ads to authenticated;
grant select, insert, update, delete on table public.ai_runs to authenticated;

grant all privileges on all tables in schema public to service_role;
grant all privileges on all sequences in schema public to service_role;
grant execute on all functions in schema public to service_role;
