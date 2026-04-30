import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";

interface PlaceholderStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
}

export function PlaceholderState({
  icon: Icon,
  title,
  description,
  actionLabel = "Preparar fluxo"
}: PlaceholderStateProps) {
  return (
    <div className="grid min-h-72 place-items-center rounded-lg border border-dashed bg-card/60 p-8 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <div className="grid size-12 place-items-center rounded-lg bg-secondary text-secondary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-normal">{title}</h2>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" size="sm">
          {actionLabel}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
