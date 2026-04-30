import { BarChart3 } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function MetricsPage() {
  return (
    <AdminModulePage
      title="Metricas"
      description="Metrica de produto, uso por modulo, conversao, retencao e consumo de IA."
      icon={BarChart3}
      primary="PostHog"
      secondary="Receita e uso"
    />
  );
}
