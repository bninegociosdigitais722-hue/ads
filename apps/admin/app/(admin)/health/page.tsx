import { HeartPulse } from "lucide-react";

import { AdminModulePage } from "@/components/admin-module-page";

export default function HealthPage() {
  return (
    <AdminModulePage
      title="Health do Sistema"
      description="Status operacional de Supabase, Stripe, IA, ScrapeCreators, AdLibrary e storage."
      icon={HeartPulse}
      primary="Checks internos"
      secondary="Dependencias externas"
    />
  );
}
