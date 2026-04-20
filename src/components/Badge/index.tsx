import clsx from 'clsx';
import type {PropsWithChildren} from 'react';
import styles from './styles.module.css';

type BadgeVariant = 'level' | 'active' | 'planned' | 'archived' | 'tag' | 'resource';

interface BadgeProps extends PropsWithChildren {
  variant?: BadgeVariant;
}

export default function Badge({children, variant = 'tag'}: BadgeProps): React.JSX.Element {
  return <span className={clsx(styles.badge, styles[variant])}>{children}</span>;
}
