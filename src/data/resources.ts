import type {ResourceMeta} from '../types/site';

export const resources: ResourceMeta[] = [
  {
    id: 'teaching-toolkit',
    title: 'Teaching Toolkit',
    description:
      'Shared conventions for course setup, release checklists, communication channels, and semester startup tasks.',
    href: '/docs/resources/teaching-toolkit',
    kind: 'docs',
    tags: ['Operations', 'Templates', 'Coordination'],
  },
  {
    id: 'course-design-checklist',
    title: 'Course Design Checklist',
    description:
      'A practical checklist for new course launches covering outcomes, assessment alignment, student workload, and accessibility.',
    href: '/docs/resources/course-design-checklist',
    kind: 'docs',
    tags: ['Design', 'QA', 'Planning'],
  },
  {
    id: 'assessment-patterns',
    title: 'Assessment Patterns',
    description:
      'Reusable assessment models for labs, projects, oral demos, rubrics, and staged feedback across different course formats.',
    href: '/docs/resources/assessment-patterns',
    kind: 'docs',
    tags: ['Assessment', 'Rubrics', 'Feedback'],
  },
  {
    id: 'course-repo-starter',
    title: 'Course Repository Starter',
    description:
      'An external starter repository for assignment scaffolding, issue templates, and baseline CI conventions.',
    href: 'https://github.com/example/course-repo-starter',
    kind: 'template',
    tags: ['GitHub', 'Automation', 'Starter'],
  },
];
