'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <span className={styles.label}>© 2021–2026</span>
          <a className={styles.link} href="https://github.com/yuriiavr">
            Yurii Avramets
          </a>
        </div>
        <div className={styles.col} style={{ alignItems: 'center' }}>
          <span className={styles.label}>Contacts</span>
          <a className={styles.link} href="tel:+380931848293">
            +380931848293
          </a>
        </div>
        <div className={styles.icons}>
          <a
            className={styles.iconLink}
            href="https://t.me/yurii_av"
            aria-label="Telegram"
          >
            TG
          </a>
          <a
            className={styles.iconLink}
            href="https://github.com/yuriiavr"
            aria-label="GitHub"
          >
            GH
          </a>
        </div>
      </div>
    </footer>
  );
}