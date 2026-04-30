# Ad Intelligence

SaaS de inteligencia criativa e mineracao de anuncios para Meta Ads, Google Ads e TikTok Ads.

## Stack

- Next.js 16.2.4 com App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui em monorepo
- Supabase Auth, Postgres e Storage
- Stripe
- Sentry e PostHog
- pnpm workspaces + Turborepo
- Vercel com dois projetos: `apps/app` e `apps/admin`

## Estrutura

```txt
apps/
  app/        # app do cliente
  admin/      # admin interno

packages/
  ui/         # design system, shell, primitives shadcn-style
  lib/        # server-first: auth, billing, IA, providers, DAL
  types/      # contratos compartilhados
  config/     # produto, navegacao e configuracoes estaticas

supabase/
  migrations/ # schema inicial com RLS
```

## Apps

### Cliente

`apps/app` contem a experiencia principal do produto:

- Dashboard
- Mineracao: Meta Ads, Google Ads, TikTok Ads
- Analises: anuncios e landing pages
- Criacao: copy, imagens, videos e landing pages
- Biblioteca: salvos e colecoes
- Plano e Creditos
- Configuracoes

### Admin

`apps/admin` e um projeto separado para operacao interna:

- Visao operacional
- Usuarios
- Planos
- Creditos
- Monitoramento
- Metricas
- Suporte
- Health do sistema

Na Vercel, importe o mesmo repositorio duas vezes e defina o Root Directory de cada projeto como `apps/app` e `apps/admin`.

## Arquitetura de providers

O frontend nunca deve falar diretamente com ScrapeCreators, AdLibrary, OpenAI, Stripe ou service role do Supabase.

Toda integracao sensivel vive em `packages/lib/src/server`.

```txt
packages/lib/src/server/ads-providers/
  provider.ts                 # AdsProvider interface
  scrape-creators-provider.ts # Meta, Google e TikTok
  adlibrary-provider.ts       # TikTok fallback
  registry.ts                 # selecao de provider por rede
```

O sistema usa `NormalizedAd` em `@ads/types`, entao cada provider externo deve transformar sua resposta para um schema unico antes de retornar dados para o app.

## Arquitetura de IA

```txt
packages/lib/src/server/ai/
  gateway.ts
```

A gateway prepara:

- analise de anuncios com GPT
- analise de landing pages com GPT + Playwright
- geracao de copy
- geracao de landing pages por blocos React
- geracao de imagens
- geracao de videos

Neste momento os metodos existem como contratos e ainda nao executam chamadas reais.

## Seguranca

Principios adotados desde a base:

- server-only para codigo sensivel
- Data Access Layer em `packages/lib`
- DTOs e tipos compartilhados em `packages/types`
- service role do Supabase somente no servidor
- RLS habilitado nas tabelas da migration inicial
- Server Actions e Route Handlers devem ser tratados como endpoints publicos
- admin separado do app do cliente e protegido por `system_role`
- providers externos sempre atras de adapters internos
- Stripe, OpenAI, ScrapeCreators e AdLibrary nunca expostos ao browser
- Sentry e PostHog inicializados somente quando as env vars estiverem presentes

## Variaveis de ambiente

Copie `.env.example` para `.env.local` dentro de cada app quando for rodar localmente.

As variaveis publicas usam prefixo `NEXT_PUBLIC_`. Chaves privadas devem ficar apenas no ambiente server-side da Vercel ou local.

## Comandos

Instalar dependencias:

```bash
pnpm install
```

Rodar os dois apps:

```bash
pnpm dev
```

Rodar apenas o cliente:

```bash
pnpm dev:app
```

Rodar apenas o admin:

```bash
pnpm dev:admin
```

Verificar tipos:

```bash
pnpm typecheck
```

Build:

```bash
pnpm build
```
