import { FileText } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function CopyPage() {
  return (
    <ModulePage
      eyebrow="Criacao"
      title="Copy"
      description="Geracao de copy preparada para GPT com entrada estruturada de produto, audiencia e oferta."
      icon={FileText}
      primaryCard={{
        title: "Briefing estruturado",
        description: "CopyGenerationInput ja define campos minimos do fluxo.",
        metric: "GPT"
      }}
      secondaryCard={{
        title: "Reuso futuro",
        description: "Copies podem alimentar imagens, videos e landing pages.",
        metric: "Pipeline"
      }}
    />
  );
}
