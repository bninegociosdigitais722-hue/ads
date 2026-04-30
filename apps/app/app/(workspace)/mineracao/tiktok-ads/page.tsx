import { Video } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function TikTokAdsPage() {
  return (
    <ModulePage
      eyebrow="Mineracao"
      title="TikTok Ads"
      description="Estrutura preparada para ScrapeCreators e fallback com AdLibrary quando precisarmos ampliar cobertura."
      icon={Video}
      primaryCard={{
        title: "Provider primario",
        description: "ScrapeCreators fica como primeira rota de consulta.",
        metric: "ScrapeCreators"
      }}
      secondaryCard={{
        title: "Fallback planejado",
        description: "AdLibrary fica desacoplado como adapter alternativo de TikTok.",
        metric: "AdLibrary"
      }}
    />
  );
}
