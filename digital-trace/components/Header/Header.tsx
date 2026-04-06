'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/contexts/Langcontext';
import { useTheme } from '@/contexts/Themecontext';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.avatar}>YA</div>
          <span className={styles.logoName}>Yurii Avramets</span>
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            <span className={styles.navNum}>01</span>
            {lang === 'uk' ? 'portfolio' : 'portfolio'}
          </Link>
          <Link
            href="/cv"
            className={`${styles.navLink} ${pathname === '/cv' ? styles.active : ''}`}
          >
            <span className={styles.navNum}>02</span>
            {lang === 'uk' ? 'cv' : 'cv'}
          </Link>
        </nav>

        <div className={styles.controls}>
          <div className={styles.langSwitch}>
            <button
              className={`${styles.langBtn} ${lang === 'uk' ? styles.langActive : ''}`}
              onClick={() => setLang('uk')}
            >
              uk
            </button>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >
              en
            </button>
          </div>
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☽' : '☀'}
          </button>
        </div>
      </div>
    </header>
  );
}