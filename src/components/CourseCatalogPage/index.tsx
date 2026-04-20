import Layout from '@theme/Layout';
import CourseGrid from '../CourseGrid';
import PageHeader from '../PageHeader';
import SectionHeader from '../SectionHeader';
import {
  getCoursesByLevel,
  getCoursesByStatus,
  levelContent,
} from '../../data/courses';
import type {CourseLevel, CourseStatus} from '../../types/site';
import styles from './styles.module.css';

const statusLabels: Record<
  CourseStatus,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  active: {
    eyebrow: 'Active delivery',
    title: 'Courses running in the current teaching cycle',
    description:
      'These courses have live materials ready for students, including schedules, labs, and active assignment flows.',
  },
  planned: {
    eyebrow: 'Planned next',
    title: 'Courses already structured for the next release',
    description:
      'Planned courses can be prepared early with docs scaffolding, draft syllabi, and resource placeholders before the semester starts.',
  },
  archived: {
    eyebrow: 'Archived reference',
    title: 'Past courses retained for continuity',
    description:
      'Archived courses remain accessible as references for students, curriculum reviews, and future course redesign work.',
  },
};

interface CourseCatalogPageProps {
  level: CourseLevel;
}

export default function CourseCatalogPage({
  level,
}: CourseCatalogPageProps): React.JSX.Element {
  const content = levelContent[level];
  const courses = getCoursesByLevel(level);

  return (
    <Layout title={content.label} description={content.pageDescription}>
      <main className={styles.page}>
        <div className={styles.shell}>
          <PageHeader
            eyebrow={content.shortLabel}
            title={content.pageTitle}
            description={content.pageDescription}
            actions={[
              {label: 'Open docs hub', to: '/docs/'},
              {label: 'Browse resources', to: '/resources'},
            ]}
          />

          <section className={styles.summaryGrid}>
            <article className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Course count</div>
              <div className={styles.summaryValue}>{String(courses.length)}</div>
              <p>{content.description}</p>
            </article>
            <article className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Content model</div>
              <div className={styles.summaryValue}>Docs per course</div>
              <p>Each course uses the same docs sections so students always know where to find syllabi, labs, assignments, and FAQs.</p>
            </article>
          </section>

          {(['active', 'planned', 'archived'] satisfies CourseStatus[]).map(
            (status) => {
              const sectionCourses = getCoursesByStatus(level, status);
              if (sectionCourses.length === 0) {
                return null;
              }

              const section = statusLabels[status];

              return (
                <section key={status} className={styles.section}>
                  <SectionHeader
                    eyebrow={section.eyebrow}
                    title={section.title}
                    description={section.description}
                  />
                  <div className={styles.gridWrap}>
                    <CourseGrid courses={sectionCourses} />
                  </div>
                </section>
              );
            },
          )}
        </div>
      </main>
    </Layout>
  );
}
