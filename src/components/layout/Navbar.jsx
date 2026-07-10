import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SERVICE_DROPDOWN, COMPANY } from '@/data';
import LogoImg from '@/assets/icons/Logo.jpeg';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src={LogoImg} alt="Prisci Constructions Logo" className={styles.logoImg} />
        <div>
          <div className={styles.logoName}>{COMPANY.name.toUpperCase()}</div>
          <div className={styles.logoTag}>{COMPANY.tagline}</div>
        </div>
      </Link>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map((l) =>
          l.dropdown ? (
            <div
              key={l.path}
              className={styles.dropWrapper}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <NavLink
                to={l.path}
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span className={styles.caret}>›</span>
              </NavLink>
              {dropOpen && (
                <div className={styles.dropdown}>
                  {SERVICE_DROPDOWN.map((col) => (
                    <div key={col.heading} className={styles.dropCol}>
                      <div className={styles.dropHeading}>{col.heading}</div>
                      {col.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={styles.dropLink}
                          onClick={() => { setOpen(false); setDropOpen(false); }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          )
        )}
        <Link to="/#contact" className={styles.cta} onClick={() => setOpen(false)}>
          REQUEST INSPECTION
        </Link>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <i className={open ? 'ti ti-x' : 'ti ti-menu-2'} />
      </button>
    </nav>
  );
}
