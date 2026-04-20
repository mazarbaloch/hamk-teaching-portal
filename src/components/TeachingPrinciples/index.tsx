import type {PrincipleItem} from '../../types/site';
import styles from './styles.module.css';

interface TeachingPrinciplesProps {
  items: PrincipleItem[];
}

export default function TeachingPrinciples({
  items,
}: TeachingPrinciplesProps): React.JSX.Element {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
