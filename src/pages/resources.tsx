import Layout from '@theme/Layout';
import FeaturedResources from '../components/FeaturedResources';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import {resources} from '../data/resources';
import styles from './resources.module.css';

export default function ResourcesPage(): React.JSX.Element {
  return (
    <Layout title="Resources" description="Shared teaching resources and reusable course operations material.">
      <main className={styles.page}>
        <div className={styles.shell}>
          <PageHeader
            eyebrow="Resources"
            title="Shared material for course operations, design, and quality"
            description="These resources sit above any single course and give you a reusable foundation for semester planning, assessment patterns, and teaching operations."
            actions={[
              {label: 'Open docs hub', to: '/docs/'},
              {label: 'View course catalogs', to: '/masters'},
            ]}
          />

          <section className={styles.section}>
            <SectionHeader
              eyebrow="Resource library"
              title="A reusable layer that supports every course"
              description="Keeping templates, checklists, and common teaching patterns in one place reduces duplication and improves consistency across both degree levels."
            />
            <div className={styles.blockSpacing}>
              <FeaturedResources items={resources} />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
