import type { LucideIcon } from "lucide-react";

import { PageHeader } from "@ads/ui/components/page-header";
import { PlaceholderState } from "@ads/ui/components/placeholder-state";
import { SectionCard } from "@ads/ui/components/section-card";

interface AdminModulePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  primary: string;
  secondary: string;
}

export function AdminModulePage({
  title,
  description,
  icon,
  primary,
  secondary
}: AdminModulePageProps) {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin"
        title={title}
        description={description}
        badge="Interno"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard
          icon={icon}
          title={primary}
          description="Acesso deve ser protegido por system_role no servidor e reforcado no banco."
          metric="RBAC"
        />
        <SectionCard
          icon={icon}
          title={secondary}
          description="Metricas operacionais devem ser lidas por DTOs especificos do admin."
          metric="DTO"
        />
      </div>
      <PlaceholderState
        icon={icon}
        title={`${title} preparado`}
        description="Esta area ainda nao executa operacoes reais, mas ja esta separada do app do cliente para deploy e permissao independentes."
      />
    </div>
  );
}
