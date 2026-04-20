import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import TeachingPrinciples from '../components/TeachingPrinciples';
import {aboutHighlights, teachingPrinciples} from '../data/siteContent';
import styles from './about.module.css';

export default function AboutPage(): React.JSX.Element {
  return (
    <Layout title="About" description="About the teaching portal architecture and teaching approach.">
      <main className={styles.page}>
        <div className={styles.shell}>
          <PageHeader
            eyebrow="About"
            title="A course platform designed around maintainability"
            description="This portal treats teaching content like a long-lived software product: content is separated from presentation, navigation is consistent, and new courses can be added without rewriting the user interface."
            actions={[
              {label: 'Open docs hub', to: '/docs/'},
              {label: 'Browse resources', to: '/resources'},
            ]}
          />

          <section className={styles.section}>
            <SectionHeader
              eyebrow="Teaching principles"
              title="The site is opinionated in favor of clarity, consistency, and long-term growth"
              description="These principles guide both the visual design and the engineering structure behind the portal."
            />
            <div className={styles.blockSpacing}>
              <TeachingPrinciples items={teachingPrinciples} />
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader
              eyebrow="Engineering choices"
              title="Why the project is organized this way"
              description="The current structure is intentionally practical: enough modularity to scale, without introducing unnecessary abstraction."
            />
            <div className={styles.cardGrid}>
              {aboutHighlights.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
