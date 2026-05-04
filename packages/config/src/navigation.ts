export interface NavigationItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface NavigationSection {
  title: string;
  icon?: string;
  items: NavigationItem[];
}

export const customerNavigation: NavigationSection[] = [
  {
    title: "Inicio",
    icon: "layout-dashboard",
    items: [{ title: "Dashboard", href: "/dashboard", icon: "layout-dashboard" }]
  },
  {
    title: "Mineracao",
    icon: "megaphone",
    items: [
      { title: "Meta Ads", href: "/mineracao/meta-ads", icon: "megaphone" },
      { title: "Google Ads", href: "/mineracao/google-ads", icon: "search" },
      { title: "TikTok Ads", href: "/mineracao/tiktok-ads", icon: "video" }
    ]
  },
  {
    title: "Analise",
    icon: "activity",
    items: [
      { title: "Analise de Anuncios", href: "/analises/anuncios", icon: "activity" },
      {
        title: "Analise de Landing Pages",
        href: "/analises/landing-pages",
        icon: "panels-top-left"
      }
    ]
  },
  {
    title: "Criacao",
    icon: "blocks",
    items: [
      { title: "Copy", href: "/criacao/copy", icon: "file-text" },
      { title: "Imagens", href: "/criacao/imagens", icon: "image" },
      { title: "Videos", href: "/criacao/videos", icon: "video" },
      {
        title: "Landing Pages",
        href: "/criacao/landing-pages",
        icon: "blocks"
      }
    ]
  },
  {
    title: "Biblioteca",
    icon: "bookmark",
    items: [
      { title: "Salvos", href: "/biblioteca/salvos", icon: "bookmark" },
      { title: "Colecoes", href: "/biblioteca/colecoes", icon: "folder" }
    ]
  },
  {
    title: "Conta",
    icon: "settings",
    items: [
      { title: "Plano e Creditos", href: "/plano-creditos", icon: "credit-card" },
      { title: "Configuracoes", href: "/configuracoes", icon: "settings" }
    ]
  }
];

export const adminNavigation: NavigationSection[] = [
  {
    title: "Operacao",
    icon: "gauge",
    items: [
      { title: "Visao Operacional", href: "/operacional", icon: "gauge" },
      { title: "Usuarios", href: "/usuarios", icon: "users" },
      { title: "Planos", href: "/planos", icon: "layers" },
      { title: "Creditos", href: "/creditos", icon: "circle-dollar-sign" }
    ]
  },
  {
    title: "Sistema",
    icon: "heart-pulse",
    items: [
      { title: "Monitoramento", href: "/monitoramento", icon: "activity" },
      { title: "Metricas", href: "/metricas", icon: "bar-chart-3" },
      { title: "Suporte", href: "/suporte", icon: "life-buoy" },
      { title: "Health", href: "/health", icon: "heart-pulse" }
    ]
  }
];
