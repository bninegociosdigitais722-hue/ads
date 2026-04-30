import { Bookmark } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function SavedAdsPage() {
  return (
    <ModulePage
      eyebrow="Biblioteca"
      title="Salvos"
      description="Area para salvar anuncios normalizados, com notas e ownership por workspace."
      icon={Bookmark}
      primaryCard={{
        title: "Repositorio",
        description: "SavedAdsRepository define o contrato sem decidir storage na UI.",
        metric: "DAL"
      }}
      secondaryCard={{
        title: "RLS",
        description: "Acesso deve ser sempre limitado ao workspace do usuario.",
        metric: "Seguro"
      }}
    />
  );
}
