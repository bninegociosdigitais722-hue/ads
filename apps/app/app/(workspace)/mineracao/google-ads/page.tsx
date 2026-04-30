import { Search } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function GoogleAdsPage() {
  return (
    <ModulePage
      eyebrow="Mineracao"
      title="Google Ads"
      description="Base para pesquisa de anuncios do Google usando ScrapeCreators sem expor provider ao frontend."
      icon={Search}
      primaryCard={{
        title: "Provider primario",
        description: "ScrapeCreators sera usado para consultas de Google Ads.",
        metric: "ScrapeCreators"
      }}
      secondaryCard={{
        title: "Filtros futuros",
        description: "Query, dominio, pais e idioma ja existem no contrato.",
        metric: "AdsSearchQuery"
      }}
    />
  );
}
