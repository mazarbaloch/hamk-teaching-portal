import type {ActionLink, PrincipleItem, QuickLinkItem} from '../types/site';

export const homeIntro = {
  eyebrow: 'Academic course portal',
  title: 'HAMK Teaching Portal',
  description:
    "A structured home for Master's and Bachelor's course materials, schedules, assignments, and shared teaching resources.",
  secondaryDescription:
    'Use the course sections below to move directly into data engineering, software delivery, analytics, AI application development, and shared teaching support material.',
  primaryAction: {
    label: "Browse Master's courses",
    to: '/masters',
  } satisfies ActionLink,
  secondaryAction: {
    label: "Browse Bachelor's courses",
    to: '/bachelors',
  } satisfies ActionLink,
};

export const homeQuickLinks: QuickLinkItem[] = [
  {
    title: 'Docs hub',
    description:
      'Open the full documentation tree for course overviews, syllabi, schedules, labs, and assignment pages.',
    to: '/docs/',
  },
  {
    title: 'Resources',
    description:
      'Browse shared resources that support course design, semester setup, and reusable teaching workflows.',
    to: '/resources',
  },
  {
    title: 'Teaching toolkit',
    description:
      'Jump directly to the shared toolkit for operational checklists, release routines, and teaching support material.',
    to: '/docs/resources/teaching-toolkit',
  },
];

export const teachingPrinciples: PrincipleItem[] = [
  {
    title: 'Readable by default',
    description:
      'Most teaching material should be simple to update with Markdown and MDX so the content can evolve quickly each semester.',
  },
  {
    title: 'Reusable where it matters',
    description:
      'React components are reserved for shared UI and curated teaching interactions, not for storing long-form course content.',
  },
  {
    title: 'Structured for long-term growth',
    description:
      "Course metadata, docs, styling, and navigation stay separated so the project remains understandable even after many semesters' worth of material.",
  },
];

export const aboutHighlights = [
  {
    title: 'Course catalogs from typed data',
    description:
      'The homepage and the level-specific catalog pages read from structured metadata, which keeps new-course additions predictable and low-risk.',
  },
  {
    title: 'Docs folders as course boundaries',
    description:
      'Every course owns its own docs subtree with the same section names, which gives students and instructors a stable navigation pattern.',
  },
  {
    title: 'Reusable UI without overengineering',
    description:
      'Shared components handle page headers, section headers, course cards, grids, and resource cards so the project stays modular without becoming abstract for its own sake.',
  },
];
