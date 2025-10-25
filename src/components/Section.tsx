import { ReactNode } from 'react';
import './Section.css';

type Props = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ title, subtitle, action, children }: Props) {
  return (
    <section className="section">
      <header className="section__header">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {action ? <div className="section__action">{action}</div> : null}
      </header>
      <div className="section__content">{children}</div>
    </section>
  );
}
