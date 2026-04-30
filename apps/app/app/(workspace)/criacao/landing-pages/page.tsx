import { Blocks } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function LandingPagesPage() {
  return (
    <ModulePage
      eyebrow="Criacao"
      title="Landing Pages"
      description="Base para gerar landing pages com GPT e renderizar blocos React controlados pelo sistema."
      icon={Blocks}
      primaryCard={{
        title: "Blocos React",
        description: "LandingPageBlock ja prepara uma saida segura e composable.",
        metric: "Blocks"
      }}
      secondaryCard={{
        title: "Publicacao futura",
        description: "Geracao, preview e publicacao podem evoluir sem mexer nos providers.",
        metric: "Roadmap"
      }}
    />
  );
}
