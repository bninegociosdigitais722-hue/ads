import { customerNavigation, productConfig } from "@ads/config";
import { AppShell } from "@ads/ui/components/app-shell";

export default function WorkspaceLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      appName={productConfig.name}
      appLabel="App do cliente"
      environmentLabel="Cliente"
      sections={customerNavigation}
    >
      {children}
    </AppShell>
  );
}
