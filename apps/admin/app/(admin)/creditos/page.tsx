import { CircleDollarSign } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function CreditsPage() {
  return (
    <AdminModulePage
      title="Creditos"
      description="Acompanhamento de saldo, ledger, ajustes manuais e consumo por funcionalidade."
      icon={CircleDollarSign}
      primary="Ledger de creditos"
      secondary="Custos por acao"
    />
  );
}
