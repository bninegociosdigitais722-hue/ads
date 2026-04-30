import { adminNavigation, productConfig } from "@ads/config";
import { AppShell } from "@ads/ui/components/app-shell";

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      appName={productConfig.name}
      appLabel="Admin interno"
      environmentLabel="Admin"
      sections={adminNavigation}
    >
      {children}
    </AppShell>
  );
}
