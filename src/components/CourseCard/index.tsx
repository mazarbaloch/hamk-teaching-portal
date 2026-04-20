import Link from '@docusaurus/Link';
import Badge from '../Badge';
import type {CourseMeta} from '../../types/site';
import styles from './styles.module.css';

interface CourseCardProps {
  course: CourseMeta;
  showLevel?: boolean;
}

export default function CourseCard({
  course,
  showLevel = false,
}: CourseCardProps): React.JSX.Element {
  const headerMeta = [course.code, course.credits].filter(Boolean).join(' | ');
  const metaItems = [
    course.credits ? {label: 'Credits', value: course.credits} : null,
    course.period
      ? {label: 'Period', value: course.period}
      : course.deliveryMode
        ? {label: 'Delivery', value: course.deliveryMode}
        : null,
    course.tags.length > 0 ? {label: 'Focus', value: course.tags.slice(0, 2).join(' / ')} : null,
  ].filter(Boolean) as {label: string; value: string}[];

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.badges}>
          {showLevel ? (
            <Badge variant="level">
              {course.level === 'masters' ? "Master's" : "Bachelor's"}
            </Badge>
          ) : null}
          <Badge variant={course.status}>{course.status}</Badge>
        </div>
        {headerMeta ? <div className={styles.code}>{headerMeta}</div> : null}
      </div>

      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.description}>{course.shortDescription}</p>

      {metaItems.length > 0 ? (
        <dl className={styles.meta}>
          {metaItems.slice(0, 2).map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className={styles.tags}>
        {course.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className={styles.actions}>
        <Link className={styles.primaryLink} to={course.docPath}>
          Open course
        </Link>
        <div className={styles.secondaryLinks}>
          {course.links?.map((link) => (
            <Link
              key={link.label}
              className={styles.secondaryLink}
              to={link.href}
              {...(link.external ? {target: '_blank', rel: 'noreferrer'} : {})}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
