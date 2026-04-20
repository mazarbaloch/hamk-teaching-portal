export type CourseLevel = 'masters' | 'bachelors';

export type CourseStatus = 'active' | 'planned' | 'archived';

export interface CourseLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CourseMeta {
  id: string;
  title: string;
  slug: string;
  level: CourseLevel;
  code?: string;
  credits?: string;
  shortDescription: string;
  period?: string;
  deliveryMode?: string;
  status: CourseStatus;
  tags: string[];
  docPath: string;
  featured?: boolean;
  links?: CourseLink[];
}

export interface ResourceMeta {
  id: string;
  title: string;
  description: string;
  href: string;
  kind: 'docs' | 'template' | 'external';
  tags: string[];
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface ActionLink {
  label: string;
  to: string;
}

export interface QuickLinkItem {
  title: string;
  description: string;
  to: string;
}
