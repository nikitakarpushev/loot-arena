import './QuickActionButton.css';

type Props = {
  icon: string;
  label: string;
  description?: string;
  href?: string;
  onClick?: () => void;
};

export function QuickActionButton({ icon, label, description, href, onClick }: Props) {
  const content = (
    <>
      <span className="quick-action__icon" aria-hidden>
        {icon}
      </span>
      <div className="quick-action__text">
        <strong>{label}</strong>
        {description ? <small>{description}</small> : null}
      </div>
    </>
  );

  if (href) {
    return (
      <a className="quick-action" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type="button" className="quick-action" onClick={onClick}>
      {content}
    </button>
  );
}
