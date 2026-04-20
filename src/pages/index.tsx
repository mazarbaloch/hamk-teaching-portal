import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CourseGrid from '../components/CourseGrid';
import SectionHeader from '../components/SectionHeader';
import TeachingPrinciples from '../components/TeachingPrinciples';
import {getCoursesByLevel, levelContent} from '../data/courses';
import {homeIntro, homeQuickLinks, teachingPrinciples} from '../data/siteContent';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const mastersCourses = getCoursesByLevel('masters');
  const bachelorsCourses = getCoursesByLevel('bachelors');

  return (
    <Layout
      title="Teaching Portal"
      description="A scalable Docusaurus teaching portal for Master's and Bachelor's courses.">
      <main className={styles.page}>
        <div className={styles.shell}>
          <header className={styles.intro}>
            <div className={styles.introBadge}>{homeIntro.eyebrow}</div>
            <h1 className={styles.introTitle}>{homeIntro.title}</h1>
            <p className={styles.introDescription}>{homeIntro.description}</p>
            <p className={styles.introSecondary}>{homeIntro.secondaryDescription}</p>
            <div className={styles.introActions}>
              <Link className={styles.primaryAction} to={homeIntro.primaryAction.to}>
                {homeIntro.primaryAction.label}
              </Link>
              <Link className={styles.secondaryAction} to={homeIntro.secondaryAction.to}>
                {homeIntro.secondaryAction.label}
              </Link>
            </div>
          </header>

          <section className={styles.section}>
            <SectionHeader
              eyebrow={levelContent.masters.shortLabel}
              title={levelContent.masters.label}
              description="Graduate-level courses with their own structured docs spaces for overviews, schedules, labs, assignments, readings, and FAQs."
              action={{label: "View all Master's courses", to: '/masters'}}
            />
            <div className={styles.blockSpacing}>
              <CourseGrid courses={mastersCourses} />
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader
              eyebrow={levelContent.bachelors.shortLabel}
              title={levelContent.bachelors.label}
              description="Undergraduate courses organized around the same consistent navigation model so students can move through course content more easily."
              action={{label: "View all Bachelor's courses", to: '/bachelors'}}
            />
            <div className={styles.blockSpacing}>
              <CourseGrid courses={bachelorsCourses} />
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader
              eyebrow="Quick links"
              title="Start from the right place"
              description="These entry points cover the shared parts of the portal that are used across courses and teaching cycles."
            />
            <div className={styles.blockSpacing}>
              <div className={styles.quickLinksGrid}>
                {homeQuickLinks.map((link) => (
                  <Link key={link.title} className={styles.quickLinkCard} to={link.to}>
                    <h3 className={styles.quickLinkTitle}>{link.title}</h3>
                    <p className={styles.quickLinkDescription}>{link.description}</p>
                    <span className={styles.quickLinkAction}>Open</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader
              eyebrow="Portal purpose"
              title="A calm, content-first home for teaching materials"
              description="The portal is designed to make teaching content easier to scan for students and easier to maintain across semesters."
              action={{label: 'Read about the portal', to: '/about'}}
            />
            <div className={styles.blockSpacing}>
              <TeachingPrinciples items={teachingPrinciples} />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
