import { Activity } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function MonitoringPage() {
  return (
    <AdminModulePage
      title="Monitoramento"
      description="Eventos tecnicos, erros, latencia e disponibilidade das camadas internas."
      icon={Activity}
      primary="Sentry e logs"
      secondary="Providers externos"
    />
  );
}
