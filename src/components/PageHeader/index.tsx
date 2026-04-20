import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Array<{
    label: string;
    to: string;
  }>;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions = [],
}: PageHeaderProps): React.JSX.Element {
  return (
    <section className={styles.header}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {actions.length > 0 ? (
        <div className={styles.actions}>
          {actions.map((action) => (
            <Link key={action.label} className={styles.action} to={action.to}>
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
