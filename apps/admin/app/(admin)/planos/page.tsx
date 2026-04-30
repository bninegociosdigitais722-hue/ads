import { Layers } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function PlansPage() {
  return (
    <AdminModulePage
      title="Planos"
      description="Gestao operacional dos planos, limites comerciais e mapeamento com Stripe."
      icon={Layers}
      primary="Catalogo de planos"
      secondary="Mapeamento Stripe"
    />
  );
}
