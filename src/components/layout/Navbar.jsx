import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '@/data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoMark}><span>PC</span></div>
        <div>
          <div className={styles.logoName}>{COMPANY.name.toUpperCase()}</div>
          <div className={styles.logoTag}>{COMPANY.tagline}</div>
        </div>
      </Link>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact#inspection" className={styles.cta} onClick={() => setOpen(false)}>
          REQUEST INSPECTION
        </Link>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <i className={open ? 'ti ti-x' : 'ti ti-menu-2'} />
      </button>
    </nav>
  );
}