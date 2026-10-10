"use client";

import { useEffect } from "react";
import Container from "@/components/Container/Container";
import { useLang } from "@/contexts/Langcontext";
import { getProject } from "@/data/projects";
import styles from "./cvpage.module.css";
import Image from "next/image";

// Chrome uses document.title as the default PDF file name
const PDF_TITLE = "Yurii_Avramets_Full-Stack_Developer";

const content = {
  uk: {
    fullName: "Аврамець Юрій",
    position: "Full-Stack Розробник",
    location: "Україна, Київ",
    contactsTitle: "Контакти",
    mob: "Моб",
    mail: "Пошта",
    skillsTitle: "Технічні навички",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    automation: "Автоматизація / AI:",
    softSkillsTitle: "Soft Skills",
    softSkills: "Вирішення проблем, командна робота, адаптивність",
    summaryTitle: "Про себе",
    aboutMe:
      "Я Full-Stack розробник з більш ніж 3-річним досвідом у створенні веб- та мобільних додатків. Спеціалізуюся на JavaScript, TypeScript, React, Next.js, Node.js, Python та React Native. Зосереджений на створенні високопродуктивних, зручних для користувача продуктів.",
    experienceTitle: "Досвід роботи",
    jobs: [
      {
        title: "Full-Stack Розробник",
        period: "Квітень 2025 — Червень 2026",
        company: "Antischool — Київ, Україна",
        achievements: [
          "Створив нову платформу для вчителів, сервіс-менеджерів та HR.",
          "Автоматизував найм вчителів і підбір вчителів для учнів, прибравши ручну роботу з цих процесів.",
        ],
      },
      {
        title: "Full-Stack Розробник",
        period: "Квітень 2023 — Березень 2025",
        company: "Firetraff — Київ, Україна",
        achievements: [
          "Автоматизував генерацію лендингів.",
          "Розробив сервіс для email-кампаній зі статистикою переглядів.",
          "Впровадив моніторинг стану серверів.",
        ],
      },
      {
        title: "Frontend Розробник",
        period: "Жовтень 2022 — Квітень 2023",
        company: "Фріланс",
        achievements: [
          "Виконав фриланс-проєкти для клієнтів.",
          "Розробив власні продукти, опанувавши нові технології.",
        ],
      },
      {
        title: "Frontend Розробник",
        period: "Квітень 2022 — Жовтень 2022",
        company: "Content Mania — Київ, Україна",
        achievements: [
          "Зверстав pixel-perfect адаптивні сайти та лендинги.",
        ],
      },
    ],
    projectsTitle: "Проєкти",
    liveLabel: "Сайт",
    roleLabel: "Роль:",
    projects: [
      {
        slug: "emailSender",
        name: "Email Sender",
        stack: "React · Node.js · Redis",
        desc: "Full-stack сервіс email-розсилок: редактор листів, відкладена відправка, черги на Redis, трекінг Open Rate та адмін-панель пулу SMTP-серверів з лімітами й автовизначенням бану.",
        role: "Соло-розробник — frontend і backend",
      },
      {
        slug: "threads",
        name: "Top Threads",
        stack: "Node.js · Puppeteer · Next.js · Supabase",
        desc: "Моніторинг та аналітика українського сегмента Threads: власний скрапер на Puppeteer збирає трендові пости, фільтрує український контент і зберігає дані в Supabase.",
        role: "Соло-розробник — скрапер, backend і UI",
      },
      {
        slug: "aliasai",
        name: "AliasAI",
        stack: "Next.js · Gemini API · Tailwind CSS",
        desc: "AI-версія гри Alias: Gemini генерує тематичні слова під рівень гравців у реальному часі, стан гри синхронізується між пристроями.",
        role: "Соло-розробник — повна розробка",
      },
      {
        slug: "aifixer",
        name: "AI Fixer",
        stack: "Electron · Gemini API",
        desc: "Кросплатформовий десктопний застосунок, що виправляє граматику та перефразовує текст у потрібному тоні за гарячими клавішами.",
        role: "Соло-розробник — повна розробка",
      },
      {
        slug: "keyframe",
        name: "Keyframe",
        stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
        desc: "Концептуальний інтернет-магазин механічних клавіатур: каталог з фільтрами, кошик з валідацією та збереженням стану, motion-дизайн.",
        role: "Соло-розробник — повна розробка",
      },
      {
        slug: "luna",
        name: "LUNA",
        stack: "React · Node.js · MongoDB",
        desc: "Новинна платформа про League of Legends українською: автентифікація, керування статтями, дошка пошуку команди, світла й темна теми.",
        role: "Соло-розробник — frontend і backend",
      },
    ],
    educationTitle: "Освіта",
    neoversityDegree: "Магістр (у процесі)",
    neoversitySpecialty: "Програмна інженерія",
    neoversityPeriod: "Вересень 2024 — донині",
    goitDegree: "Full-stack Front-End Розробник",
    goitPeriod: "Листопад 2021 — Вересень 2022",
    kneuDegree: "Бакалавр",
    kneuSpecialty: "Облік та податковий менеджмент",
    kneuPeriod: "Вересень 2017 — Червень 2021",
    languagesTitle: "Мови",
    englishLang: "Англійська — Upper-Intermediate (B2)",
    ukrainianLang: "Українська — Рідна (C2)",
    printCv: "Роздрукувати",
  },
  en: {
    fullName: "Yurii Avramets",
    position: "Full-Stack Developer",
    location: "Ukraine, Kyiv",
    contactsTitle: "Contacts",
    mob: "Phone",
    mail: "Email",
    skillsTitle: "Tech Skills",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    automation: "Automation / AI:",
    softSkillsTitle: "Soft Skills",
    softSkills: "Problem-solving, teamwork, adaptability",
    summaryTitle: "Summary",
    aboutMe:
      "I am a Full-Stack Developer with over 3 years of experience in building web and mobile applications. I specialize in JavaScript, TypeScript, React, Next.js, Node.js, Python and React Native. Focused on delivering high-performing, user-friendly products.",
    experienceTitle: "Work Experience",
    jobs: [
      {
        title: "Full-Stack Developer",
        period: "April 2025 — June 2026",
        company: "Antischool — Kyiv, Ukraine",
        achievements: [
          "Built a new platform for teachers, service managers, and HR.",
          "Automated teacher hiring and teacher-to-student matching, removing manual work from both processes.",
        ],
      },
      {
        title: "Full-Stack Developer",
        period: "April 2023 — March 2025",
        company: "Firetraff — Kyiv, Ukraine",
        achievements: [
          "Automated landing page generation.",
          "Developed an email campaign service with view statistics.",
          "Implemented server health monitoring.",
        ],
      },
      {
        title: "Frontend Developer",
        period: "October 2022 — April 2023",
        company: "Freelance",
        achievements: [
          "Delivered freelance projects for clients.",
          "Built personal products while mastering new technologies.",
        ],
      },
      {
        title: "Frontend Developer",
        period: "April 2022 — October 2022",
        company: "Content Mania — Kyiv, Ukraine",
        achievements: [
          "Delivered pixel-perfect, responsive websites and landing pages.",
        ],
      },
    ],
    projectsTitle: "Projects",
    liveLabel: "Live",
    roleLabel: "Role:",
    projects: [
      {
        slug: "emailSender",
        name: "Email Sender",
        stack: "React · Node.js · Redis",
        desc: "Full-stack newsletter service: email editor, scheduled sending, Redis queues, open-rate tracking and an admin panel for an SMTP server pool with daily limits and automatic ban detection.",
        role: "Solo developer — frontend & backend",
      },
      {
        slug: "threads",
        name: "Top Threads",
        stack: "Node.js · Puppeteer · Next.js · Supabase",
        desc: "Monitoring and analytics for the Ukrainian segment of Threads: a custom Puppeteer scraper collects trending posts, filters Ukrainian content and stores the data in Supabase.",
        role: "Solo developer — scraper, backend & UI",
      },
      {
        slug: "aliasai",
        name: "AliasAI",
        stack: "Next.js · Gemini API · Tailwind CSS",
        desc: "AI take on the Alias word game: Gemini generates themed words for the players' level in real time, with game state synced across devices.",
        role: "Solo developer — full development",
      },
      {
        slug: "aifixer",
        name: "AI Fixer",
        stack: "Electron · Gemini API",
        desc: "Cross-platform desktop app that fixes grammar and rephrases text in a chosen tone via global hotkeys.",
        role: "Solo developer — full development",
      },
      {
        slug: "keyframe",
        name: "Keyframe",
        stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
        desc: "Concept e-commerce store for mechanical keyboards: filterable product catalog, cart with validation and persisted state, motion design.",
        role: "Solo developer — full development",
      },
      {
        slug: "luna",
        name: "LUNA",
        stack: "React · Node.js · MongoDB",
        desc: "Ukrainian-language League of Legends news platform: authentication, article management, team-finder board, light and dark themes.",
        role: "Solo developer — frontend & backend",
      },
    ],
    educationTitle: "Education",
    neoversityDegree: "Master's Degree (In progress)",
    neoversitySpecialty: "Software Engineering",
    neoversityPeriod: "September 2024 — Present",
    goitDegree: "Full-stack Front-End Developer",
    goitPeriod: "November 2021 — September 2022",
    kneuDegree: "Bachelor's Degree",
    kneuSpecialty: "Accounting & Management Taxation",
    kneuPeriod: "September 2017 — June 2021",
    languagesTitle: "Languages",
    englishLang: "English — Upper-Intermediate (B2)",
    ukrainianLang: "Ukrainian — Native (C2)",
    printCv: "Print",
  },
};

export default function CVPage() {
  const { lang } = useLang();
  const t = content[lang];

  useEffect(() => {
    let pageTitle = document.title;
    const onBeforePrint = () => {
      pageTitle = document.title;
      document.title = PDF_TITLE;
    };
    const onAfterPrint = () => {
      document.title = pageTitle;
    };
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return (
    <Container>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t.fullName}</h1>
        <div className={styles.actions}>
          <button className={styles.actionBtn} onClick={() => window.print()}>
            ⎙ {t.printCv}
          </button>
        </div>
      </div>

      <div className={styles.cvLayout}>
        <aside className={styles.sidebar}>
          <div className={styles.photoWrap}>
            <Image
              className={styles.photoPlaceholder}
              src="/my_photo.jpg"
              alt={t.fullName}
              width={280}
              height={280}
              priority
            />
          </div>

          <div className={styles.sideSection}>
            <h2 className={styles.sideTitle}>{t.position}</h2>
            <p className={styles.sideLocation}>📍 {t.location}</p>
          </div>

          <div className={styles.sideSection}>
            <h3 className={styles.sideHeading}>{t.contactsTitle}</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{t.mob}</span>
                <a href="tel:+380931848293" className={styles.contactLink}>
                  +380931848293
                </a>
              </li>
              <li>
                <span className={styles.contactLabel}>{t.mail}</span>
                <a
                  href="mailto:yura.avramets@ukr.net"
                  className={styles.contactLink}
                >
                  yura.avramets@ukr.net
                </a>
              </li>
            </ul>
            <div className={styles.socialLinks}>
              <a
                href="https://t.me/yurii_av"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://www.linkedin.com/in/avramets-yurii"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yuriiavr"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.sideSection}>
            <h3 className={styles.sideHeading}>{t.skillsTitle}</h3>
            <ul className={styles.skillList}>
              <li>
                <b className={styles.skillLabel}>{t.frontend}</b>
                <span>
                  HTML, CSS, JS, TypeScript, React, Redux, Next.js, Tailwind
                </span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.backend}</b>
                <span>Node.js, Python</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.mobile}</b>
                <span>React Native, Expo</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.database}</b>
                <span>MongoDB, MySQL, Firebase, Supabase</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.tools}</b>
                <span>Git, Webpack, Vite, Electron</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.automation}</b>
                <span>Claude Code, n8n, Make, Zapier</span>
              </li>
            </ul>
          </div>

          <div className={styles.sideSection}>
            <h3 className={styles.sideHeading}>{t.softSkillsTitle}</h3>
            <p className={styles.softSkills}>{t.softSkills}</p>
          </div>
        </aside>

        <div className={styles.main}>
          <h2 className={styles.sectionHeading}>{t.summaryTitle}</h2>
          <p className={styles.aboutMe}>{t.aboutMe}</p>

          <h2 className={styles.sectionHeading}>{t.experienceTitle}</h2>

          {t.jobs.map((job) => (
            <div key={job.period} className={styles.entry}>
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>{job.title}</h3>
                <span className={styles.entryDate}>{job.period}</span>
              </div>
              <span className={styles.entryCompany}>{job.company}</span>
              <ul className={styles.entryList}>
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className={styles.sectionHeading}>{t.projectsTitle}</h2>

          {t.projects.map((p) => {
            const project = getProject(p.slug);
            return (
              <div key={p.slug} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <h3 className={styles.entryTitle}>{p.name}</h3>
                  <span className={styles.entryLinks}>
                    {project?.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.liveLabel}
                      </a>
                    )}
                    {project?.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </span>
                </div>
                <span className={styles.entryCompany}>{p.stack}</span>
                <p className={styles.entryDesc}>{p.desc}</p>
                <p className={styles.entryDesc}>
                  <b className={styles.entryRole}>{t.roleLabel}</b> {p.role}
                </p>
              </div>
            );
          })}

          <h2 className={styles.sectionHeading}>{t.educationTitle}</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>Neoversity, Woolf</h3>
              <span className={styles.entryDate}>{t.neoversityPeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.neoversityDegree}</span>
            <p className={styles.entryDesc}>{t.neoversitySpecialty}</p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>GoIT</h3>
              <span className={styles.entryDate}>{t.goitPeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.goitDegree}</span>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>
                Kyiv National Economic University
              </h3>
              <span className={styles.entryDate}>{t.kneuPeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.kneuDegree}</span>
            <p className={styles.entryDesc}>{t.kneuSpecialty}</p>
          </div>

          <h2 className={styles.sectionHeading}>{t.languagesTitle}</h2>
          <div className={`${styles.entry} ${styles.entryLast}`}>
            <p className={styles.entryCompany}>{t.englishLang}</p>
            <p className={styles.entryCompany}>{t.ukrainianLang}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
