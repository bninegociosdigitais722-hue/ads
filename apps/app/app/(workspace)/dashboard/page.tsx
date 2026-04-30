import {
  Activity,
  Bookmark,
  CreditCard,
  Megaphone,
  Sparkles,
  TrendingUp
} from "lucide-react";

import { PageHeader } from "@ads/ui/components/page-header";
import { SectionCard } from "@ads/ui/components/section-card";
import { Card, CardContent, CardHeader, CardTitle } from "@ads/ui/components/ui/card";

const cards = [
  {
    icon: Megaphone,
    title: "Mineracao pronta para conectar",
    description: "Meta, Google e TikTok passam pela camada interna de providers.",
    metric: "3 redes"
  },
  {
    icon: Activity,
    title: "Analises com IA",
    description: "Contratos para anuncios, landing pages e geracao ja existem.",
    metric: "6 fluxos"
  },
  {
    icon: Bookmark,
    title: "Biblioteca normalizada",
    description: "Salvos e colecoes ficam desacoplados da origem do anuncio.",
    metric: "Base"
  },
  {
    icon: CreditCard,
    title: "Creditos e plano",
    description: "Estrutura preparada para Stripe, ledger e consumo por acao.",
    metric: "Stripe"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Produto"
        title="Dashboard"
        description="Visao inicial do SaaS com os principais blocos de arquitetura posicionados para crescer."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <SectionCard key={card.title} {...card} />
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Proximas trilhas de produto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "IA aplicada",
                text: "Analise, copy e blocos de landing page entram por uma gateway unica."
              },
              {
                icon: TrendingUp,
                title: "Dados de anuncios",
                text: "Adapters transformam respostas externas no schema normalizado."
              },
              {
                icon: CreditCard,
                title: "Monetizacao",
                text: "Assinaturas e consumo de creditos ficam isolados da UI."
              }
            ].map((item) => (
              <div className="rounded-lg border bg-background p-4" key={item.title}>
                <item.icon className="mb-3 size-5 text-primary" aria-hidden="true" />
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
