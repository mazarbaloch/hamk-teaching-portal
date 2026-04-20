import CourseCard from '../CourseCard';
import type {CourseMeta} from '../../types/site';
import styles from './styles.module.css';

interface CourseGridProps {
  courses: CourseMeta[];
  showLevel?: boolean;
  emptyMessage?: string;
}

export default function CourseGrid({
  courses,
  showLevel = false,
  emptyMessage = 'No courses are available in this section yet.',
}: CourseGridProps): React.JSX.Element {
  if (courses.length === 0) {
    return <div className={styles.empty}>{emptyMessage}</div>;
  }

  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} showLevel={showLevel} />
      ))}
    </div>
  );
}
