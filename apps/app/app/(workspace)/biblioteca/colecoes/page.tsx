import { Folder } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function CollectionsPage() {
  return (
    <ModulePage
      eyebrow="Biblioteca"
      title="Colecoes"
      description="Organizacao de anuncios salvos por campanhas, nichos, criativos ou pesquisas."
      icon={Folder}
      primaryCard={{
        title: "Curadoria",
        description: "Colecoes agrupam referencias sem duplicar payload de anuncio.",
        metric: "Organizado"
      }}
      secondaryCard={{
        title: "Colaboracao",
        description: "Modelo por workspace permite evoluir para times e permissoes.",
        metric: "Workspace"
      }}
    />
  );
}
