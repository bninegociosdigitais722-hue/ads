import { PanelsTopLeft } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function LandingPageAnalysisPage() {
  return (
    <ModulePage
      eyebrow="Analises"
      title="Analise de Landing Pages"
      description="Preparado para combinar GPT com captura via Playwright em camada server-only."
      icon={PanelsTopLeft}
      primaryCard={{
        title: "Captura futura",
        description: "Playwright deve rodar somente no servidor ou em job controlado.",
        metric: "Server"
      }}
      secondaryCard={{
        title: "Saida estruturada",
        description: "Resultados poderao virar diagnosticos, notas e oportunidades.",
        metric: "GPT"
      }}
    />
  );
}
