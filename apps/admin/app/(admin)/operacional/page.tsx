import { Gauge } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function OperationalPage() {
  return (
    <AdminModulePage
      title="Visao Operacional"
      description="Resumo interno de atividade, filas, consumo de creditos e saude dos providers."
      icon={Gauge}
      primary="Operacao do produto"
      secondary="Eventos recentes"
    />
  );
}
