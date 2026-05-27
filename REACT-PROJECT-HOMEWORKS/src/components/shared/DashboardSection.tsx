import type { ReactNode } from "react";

interface DashboardSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function DashboardSection({
  id,
  title,
  subtitle,
  children,
}: DashboardSectionProps) {
  return (
    <section id={id} className="dashboard-section">
      <div className="dashboard-section__header">
        <h2>{title}</h2>

        {subtitle !== undefined && <p>{subtitle}</p>}
      </div>

      <div className="dashboard-section__content">{children}</div>
    </section>
  );
}