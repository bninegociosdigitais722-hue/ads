import { LifeBuoy } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function SupportPage() {
  return (
    <AdminModulePage
      title="Suporte"
      description="Ferramentas internas para investigar usuarios, problemas e solicitações."
      icon={LifeBuoy}
      primary="Atendimento"
      secondary="Auditoria"
    />
  );
}
