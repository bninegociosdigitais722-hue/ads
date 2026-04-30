import { Megaphone } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function MetaAdsPage() {
  return (
    <ModulePage
      eyebrow="Mineracao"
      title="Meta Ads"
      description="Pesquisa e leitura de anuncios da Meta via ScrapeCreators, sempre passando pela camada interna."
      icon={Megaphone}
      primaryCard={{
        title: "Provider primario",
        description: "ScrapeCreators sera o adapter inicial para Meta Ads.",
        metric: "ScrapeCreators"
      }}
      secondaryCard={{
        title: "Schema unico",
        description: "Resultados entram como NormalizedAd antes de chegar na UI.",
        metric: "Normalizado"
      }}
    />
  );
}
