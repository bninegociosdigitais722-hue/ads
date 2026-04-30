import { Activity } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function AdAnalysisPage() {
  return (
    <ModulePage
      eyebrow="Analises"
      title="Analise de Anuncios"
      description="Modulo preparado para usar GPT sobre anuncios normalizados e salvar historico de execucoes."
      icon={Activity}
      primaryCard={{
        title: "Entrada segura",
        description: "A IA recebe NormalizedAd, nao payload bruto de provider.",
        metric: "GPT"
      }}
      secondaryCard={{
        title: "Controle de creditos",
        description: "Cada execucao podera registrar custo no ledger.",
        metric: "1 credito"
      }}
    />
  );
}
