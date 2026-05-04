"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  Activity,
  BarChart3,
  Blocks,
  Bookmark,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  FileText,
  Folder,
  Gauge,
  HeartPulse,
  Image,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  LucideIcon,
  Megaphone,
  PanelsTopLeft,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Video
} from "lucide-react";

import type { NavigationItem, NavigationSection } from "@ads/config";

import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const icons: Record<string, LucideIcon> = {
  activity: Activity,
  "bar-chart-3": BarChart3,
  blocks: Blocks,
  bookmark: Bookmark,
  "circle-dollar-sign": CircleDollarSign,
  "credit-card": CreditCard,
  "file-text": FileText,
  folder: Folder,
  gauge: Gauge,
  "heart-pulse": HeartPulse,
  image: Image,
  layers: Layers,
  "layout-dashboard": LayoutDashboard,
  "life-buoy": LifeBuoy,
  megaphone: Megaphone,
  "panels-top-left": PanelsTopLeft,
  search: Search,
  settings: Settings,
  users: Users,
  video: Video
};

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface AppShellProps {
  appName: string;
  appLabel: string;
  sections: NavigationSection[];
  children: ReactNode;
  environmentLabel?: string;
}

export function AppShell({
  appName,
  appLabel,
  sections,
  children,
  environmentLabel = "Base"
}: AppShellProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const mobileItems = sections.flatMap((section) => section.items);

  function toggleSection(title: string) {
    setExpandedSections((current) => ({
      ...current,
      [title]: !current[title]
    }));
  }

  function renderNavigationItem(item: NavigationItem, nested = false) {
    const Icon = icons[item.icon] ?? ShieldCheck;
    const href = item.href as LinkProps<string>["href"];
    const active = isActivePath(pathname, item.href);

    return (
      <Link
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          nested && "h-8 pl-8 text-[13px] text-muted-foreground",
          active && "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
        )}
        href={href}
        key={item.href}
      >
        <Icon className="size-4 shrink-0" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate">{item.title}</span>
        {item.badge ? (
          <Badge variant="secondary" className="h-5 px-1.5">
            {item.badge}
          </Badge>
        ) : null}
      </Link>
    );
  }

  return (
    <div className="min-h-svh bg-background">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-sidebar-border bg-sidebar lg:flex lg:flex-col">
        <div className="flex h-16 items-center gap-3 px-5">
          <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">
              {appName}
            </p>
            <p className="text-xs text-muted-foreground">{appLabel}</p>
          </div>
        </div>
        <Separator />
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {sections.map((section) => {
              const activeSection = section.items.some((item) =>
                isActivePath(pathname, item.href)
              );
              const open = activeSection || expandedSections[section.title];
              const sectionIcon = section.icon ?? section.items[0]?.icon;
              const SectionIcon = sectionIcon
                ? icons[sectionIcon] ?? ShieldCheck
                : ShieldCheck;
              const panelId = `sidebar-section-${section.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`;

              if (section.items.length === 1) {
                return renderNavigationItem(section.items[0]);
              }

              return (
                <div key={section.title} className="space-y-1">
                  <button
                    aria-controls={panelId}
                    aria-expanded={open}
                    className={cn(
                      "flex h-9 w-full items-center gap-3 rounded-md px-2 text-left text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      activeSection &&
                        "bg-sidebar-accent/70 text-sidebar-accent-foreground"
                    )}
                    onClick={() => toggleSection(section.title)}
                    type="button"
                  >
                    <SectionIcon className="size-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">{section.title}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform",
                        open && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {open ? (
                    <div className="space-y-1" id={panelId}>
                      {section.items.map((item) => renderNavigationItem(item, true))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>
        <div className="border-t border-sidebar-border p-4">
          <div className="rounded-lg border bg-card p-3">
            <p className="text-xs font-medium text-muted-foreground">
              Ambiente
            </p>
            <p className="mt-1 text-sm font-semibold">{environmentLabel}</p>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/92 px-4 backdrop-blur md:px-8">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold lg:hidden">{appName}</p>
            <p className="hidden text-sm text-muted-foreground lg:block">
              Fundacao pronta para autenticacao, billing, IA e providers.
            </p>
          </div>
          <Badge variant="outline">{environmentLabel}</Badge>
        </header>
        <nav className="sticky top-14 z-20 border-b bg-background/95 px-4 py-2 backdrop-blur lg:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {mobileItems.map((item) => {
              const Icon = icons[item.icon] ?? ShieldCheck;
              const href = item.href as LinkProps<string>["href"];
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center gap-2 rounded-md border px-3 text-xs font-medium text-muted-foreground",
                    active && "border-primary/20 bg-secondary text-secondary-foreground"
                  )}
                  href={href}
                  key={item.href}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
        <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8 md:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
