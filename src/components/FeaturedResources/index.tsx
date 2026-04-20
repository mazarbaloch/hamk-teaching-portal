import Link from '@docusaurus/Link';
import Badge from '../Badge';
import type {ResourceMeta} from '../../types/site';
import styles from './styles.module.css';

interface FeaturedResourcesProps {
  items: ResourceMeta[];
}

export default function FeaturedResources({
  items,
}: FeaturedResourcesProps): React.JSX.Element {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <div className={styles.header}>
            <Badge variant="resource">{item.kind}</Badge>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <Link
            className={styles.link}
            to={item.href}
            {...(item.kind === 'external' || item.kind === 'template'
              ? {target: '_blank', rel: 'noreferrer'}
              : {})}>
            Open resource
          </Link>
        </article>
      ))}
    </div>
  );
}
