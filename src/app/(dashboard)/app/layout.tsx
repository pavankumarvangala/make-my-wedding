import type { ReactNode } from "react";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div data-surface="private-dashboard">{children}</div>;
}
