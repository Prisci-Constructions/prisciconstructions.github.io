import styles from './SectionHeader.module.css';
import { cn } from '@/utils/cn';

export default function SectionHeader({ tag, title, line = true, center = false, white = false }) {
  return (
    <div className={cn(styles.wrap, center && styles.center)}>
      {tag && <div className={cn(styles.tag, white && styles.tagWhite)}>{tag}</div>}
      <h2 className={cn(styles.title, white && styles.titleWhite)}>{title}</h2>
      {line && <div className={cn(styles.line, center && styles.lineCenter)} />}
    </div>
  );
}