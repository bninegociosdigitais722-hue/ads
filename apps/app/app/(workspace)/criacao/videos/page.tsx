import { Video } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function VideosPage() {
  return (
    <ModulePage
      eyebrow="Criacao"
      title="Videos"
      description="Modulo reservado para geracao de videos quando a stack de IA e creditos estiver madura."
      icon={Video}
      primaryCard={{
        title: "Custo elevado",
        description: "O contrato ja separa video para controle especifico de creditos.",
        metric: "Futuro"
      }}
      secondaryCard={{
        title: "Pipeline async",
        description: "Videos devem rodar em jobs e nunca bloquear uma request curta.",
        metric: "Job"
      }}
    />
  );
}
