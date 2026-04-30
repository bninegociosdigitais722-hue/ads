import { Image } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function ImagesPage() {
  return (
    <ModulePage
      eyebrow="Criacao"
      title="Imagens"
      description="Espaco preparado para geracao e armazenamento de imagens criativas em Supabase Storage."
      icon={Image}
      primaryCard={{
        title: "Gateway de IA",
        description: "Geracao de imagem entrara por contrato, sem acoplar provider na UI.",
        metric: "Preparado"
      }}
      secondaryCard={{
        title: "Storage",
        description: "Arquivos finais devem ser persistidos com ownership por workspace.",
        metric: "Supabase"
      }}
    />
  );
}
