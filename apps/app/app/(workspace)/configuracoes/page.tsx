import { Settings } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function SettingsPage() {
  return (
    <ModulePage
      eyebrow="Conta"
      title="Configuracoes"
      description="Configuracoes de workspace, perfil, membros e preferencias do produto."
      icon={Settings}
      primaryCard={{
        title: "Perfil e workspace",
        description: "Auth e membership serao resolvidos pela camada de dados.",
        metric: "Supabase"
      }}
      secondaryCard={{
        title: "Seguranca",
        description: "Permissoes devem ser checadas no servidor e reforcadas por RLS.",
        metric: "RLS"
      }}
    />
  );
}
