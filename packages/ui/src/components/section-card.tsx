import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";

interface SectionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}

export function SectionCard({
  icon: Icon,
  title,
  description,
  metric
}: SectionCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-0">
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-9 place-items-center rounded-md bg-secondary text-secondary-foreground">
            <Icon className="size-4" aria-hidden="true" />
          </div>
          {metric ? (
            <span className="text-sm font-semibold text-primary">{metric}</span>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
