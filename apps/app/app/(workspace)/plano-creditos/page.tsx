import { CreditCard } from "lucide-react";

import { ModulePage } from "@/components/module-page";

export default function BillingPage() {
  return (
    <ModulePage
      eyebrow="Conta"
      title="Plano e Creditos"
      description="Base para assinatura Stripe, saldo de creditos e ledger de consumo por workspace."
      icon={CreditCard}
      primaryCard={{
        title: "Stripe",
        description: "Cliente server-only preparado para checkout, portal e webhooks.",
        metric: "Billing"
      }}
      secondaryCard={{
        title: "Creditos",
        description: "Custos por acao ficam centralizados antes de virar regra comercial.",
        metric: "Ledger"
      }}
    />
  );
}
