import { Users } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function UsersPage() {
  return (
    <AdminModulePage
      title="Usuarios"
      description="Consulta e suporte a usuarios, workspaces, roles e historico de conta."
      icon={Users}
      primary="Usuarios e workspaces"
      secondary="Permissoes e auditoria"
    />
  );
}
