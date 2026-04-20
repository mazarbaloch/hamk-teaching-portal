import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    label: string;
    to: string;
  };
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      {action ? (
        <Link className={styles.action} to={action.to}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
