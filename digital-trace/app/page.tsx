'use client';

import Container from '@/components/Container/Container';
import ProjectList from '@/components/ProjectList/Projectlist';
import { useLang } from '@/contexts/Langcontext';
import styles from './page.module.css';

const content = {
  uk: {
    tag: 'Привіт, мене звати Юра',
    title: "I'm Full-Stack\nDeveloper.",
    subtitle:
      'Я розпочав свій шлях як front-end розробник наприкінці 2022 року. Мій стек включає JavaScript, React, React Native, TypeScript, Node.js, Electron та Python.',
    projects: 'Мої Проекти',
  },
  en: {
    tag: 'Hello, my name is Yura',
    title: "I'm Full-Stack\nDeveloper.",
    subtitle:
      "I embarked on my journey as a front-end developer towards the end of 2022. My stack includes JavaScript, React, React Native, TypeScript, Node.js, Electron and Python.",
    projects: 'My Projects',
  },
};

export default function HomePage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <Container>
      <section className={styles.hero}>
        <span className={styles.tag}>{t.tag}</span>
        <h1 className={styles.title}>
          {t.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <section className={styles.projects}>
        <h2 className={styles.sectionTitle}>{t.projects}</h2>
        <ProjectList />
      </section>
    </Container>
  );
}