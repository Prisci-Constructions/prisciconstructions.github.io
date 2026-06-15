import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { cn } from '@/utils/cn';

export default function Button({ children, to, href, onClick, variant = 'primary', size = 'md', icon, className }) {
  const cls = cn(styles.btn, styles[variant], styles[size], className);
  const content = <>{icon && <i className={`ti ${icon}`} aria-hidden="true" />}{children}</>;

  if (to)   return <Link    to={to}     className={cls}>{content}</Link>;
  if (href) return <a       href={href} className={cls}>{content}</a>;
  return          <button  onClick={onClick} className={cls}>{content}</button>;
}