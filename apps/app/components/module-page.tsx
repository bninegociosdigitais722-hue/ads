import type { LucideIcon } from "lucide-react";

import { PageHeader } from "@ads/ui/components/page-header";
import { PlaceholderState } from "@ads/ui/components/placeholder-state";
import { SectionCard } from "@ads/ui/components/section-card";

interface ModulePageProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  primaryCard: {
    title: string;
    description: string;
    metric?: string;
  };
  secondaryCard: {
    title: string;
    description: string;
    metric?: string;
  };
}

export function ModulePage({
  eyebrow,
  title,
  description,
  icon,
  primaryCard,
  secondaryCard
}: ModulePageProps) {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        badge="Placeholder"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard icon={icon} {...primaryCard} />
        <SectionCard icon={icon} {...secondaryCard} />
      </div>
      <PlaceholderState
        icon={icon}
        title={`${title} ainda sem logica ativa`}
        description="A tela ja esta posicionada na arquitetura, pronta para receber dados reais, autorizacao e regras de creditos quando ativarmos o modulo."
      />
    </div>
  );
}
