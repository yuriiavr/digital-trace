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
    skillsTitle: "Технічні навички",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    ai: "AI / LLM:",
    automation: "Автоматизація:",
    summaryTitle: "Про себе",
    aboutMe:
      "Full-Stack розробник і Automation Lead з 3+ роками комерційного досвіду. Створюю веб-платформи та автоматизую бізнес-процеси під ключ: моєю поточною платформою щодня користуються 10 000+ людей. Працюю з JavaScript, TypeScript, React, Next.js, Node.js, NestJS, Python, n8n, Make та LLM API.",
    experienceTitle: "Досвід роботи",
    stackLabel: "Стек:",
    jobs: [
      {
        title: "Automation Lead / Full-Stack Розробник",
        period: "Травень 2026 — донині",
        company: "Space Deer Anti-School of English — Київ, Україна",
        stack: "React, Next.js, Node.js, NestJS, n8n, Make, LLM API",
        achievements: [
          "Самостійно розробив платформу компанії для вчителів, учнів, сервіс-менеджерів та HR — нею щодня користуються 10 000+ людей.",
          "Автоматизував найм вчителів — через нього щомісяця проходять 200 нових вчителів.",
          "Повністю автоматизував підбір вчителя для учня: раніше це забирало в менеджерів години, а учень чекав до 2 тижнів; тепер менеджер підключається лише до поодиноких складних кейсів.",
        ],
      },
      {
        title: "Full-Stack Розробник",
        period: "Квітень 2023 — Березень 2025",
        company: "Firetraff — Київ, Україна",
        stack: "React, Next.js, Node.js, NestJS, Redis, n8n, Make",
        achievements: [
          "Автоматизував генерацію лендингів: замість 10 за робочий день — 10 за годину (у 8 разів швидше); згенеровано 12 000+ лендингів.",
          "Розробив сервіс email-розсилок з чергами на Redis, відкладеною відправкою та трекінгом Open Rate — ~20 000 листів на день через пул SMTP-серверів.",
          "Впровадив моніторинг серверів зі сповіщеннями про падіння та статистикою.",
        ],
      },
      {
        title: "Frontend Розробник",
        period: "Квітень 2022 — Квітень 2023",
        company: "Content Mania (Київ, Україна) та фріланс",
        stack: "HTML, CSS, JavaScript, React",
        achievements: [
          "Реалізував 500+ невеликих проєктів і 10 повноцінних великих сайтів.",
          "Pixel-perfect адаптивна верстка сайтів та лендингів.",
        ],
      },
    ],
    projectsTitle: "Проєкти",
    liveLabel: "Сайт",
    roleLabel: "Роль:",
    projects: [
      {
        slug: "threads",
        name: "Top Threads",
        stack: "Node.js · Puppeteer · Next.js · Supabase",
        desc: "Аналітика українського сегмента Threads: скрапер на Puppeteer збирає трендові пости й зберігає їх у Supabase.",
        role: "Соло-розробник — скрапер, backend і UI",
      },
      {
        slug: "aliasai",
        name: "AliasAI",
        stack: "Next.js · Gemini API · Tailwind CSS",
        desc: "AI-версія гри Alias: Gemini генерує тематичні слова в реальному часі, стан гри синхронізується між пристроями.",
        role: "Соло-розробник — повна розробка",
      },
      {
        slug: "keyframe",
        name: "Keyframe",
        stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
        desc: "Концептуальний інтернет-магазин механічних клавіатур з фільтрами каталогу та кошиком зі збереженням стану.",
        role: "Соло-розробник — повна розробка",
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
    skillsTitle: "Tech Skills",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    ai: "AI / LLM:",
    automation: "Automation:",
    summaryTitle: "Summary",
    aboutMe:
      "Full-Stack Developer and Automation Lead with 3+ years of commercial experience. I build web platforms and automate business processes end to end: my current platform is used by 10,000+ people daily. I work with JavaScript, TypeScript, React, Next.js, Node.js, NestJS, Python, n8n, Make and LLM APIs.",
    experienceTitle: "Work Experience",
    stackLabel: "Stack:",
    jobs: [
      {
        title: "Automation Lead / Full-Stack Developer",
        period: "May 2026 — Present",
        company: "Space Deer Anti-School of English — Kyiv, Ukraine",
        stack: "React, Next.js, Node.js, NestJS, n8n, Make, LLM APIs",
        achievements: [
          "Single-handedly built the company platform for teachers, students, service managers and HR, used daily by 10,000+ people.",
          "Automated teacher hiring, which now onboards 200 new teachers every month.",
          "Fully automated teacher-to-student matching that used to take managers hours and left students waiting up to 2 weeks; managers now step in only for rare complex cases.",
        ],
      },
      {
        title: "Full-Stack Developer",
        period: "April 2023 — March 2025",
        company: "Firetraff — Kyiv, Ukraine",
        stack: "React, Next.js, Node.js, NestJS, Redis, n8n, Make",
        achievements: [
          "Automated landing page generation: from 10 pages per working day to 10 per hour (8x faster), with 12,000+ pages generated.",
          "Built an email campaign service with Redis queues, scheduled sending and open-rate tracking, delivering ~20,000 emails per day through a pool of SMTP servers.",
          "Implemented server monitoring with downtime alerts and statistics.",
        ],
      },
      {
        title: "Frontend Developer",
        period: "April 2022 — April 2023",
        company: "Content Mania (Kyiv, Ukraine) & Freelance",
        stack: "HTML, CSS, JavaScript, React",
        achievements: [
          "Delivered 500+ small projects and 10 full-scale websites.",
          "Built pixel-perfect, responsive websites and landing pages.",
        ],
      },
    ],
    projectsTitle: "Projects",
    liveLabel: "Live",
    roleLabel: "Role:",
    projects: [
      {
        slug: "threads",
        name: "Top Threads",
        stack: "Node.js · Puppeteer · Next.js · Supabase",
        desc: "Analytics for the Ukrainian segment of Threads: a Puppeteer scraper collects trending posts and stores them in Supabase.",
        role: "Solo developer — scraper, backend & UI",
      },
      {
        slug: "aliasai",
        name: "AliasAI",
        stack: "Next.js · Gemini API · Tailwind CSS",
        desc: "AI version of the Alias word game: Gemini generates themed words in real time, with game state synced across devices.",
        role: "Solo developer — full development",
      },
      {
        slug: "keyframe",
        name: "Keyframe",
        stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
        desc: "Concept e-commerce store for mechanical keyboards with a filterable catalog and a persistent cart.",
        role: "Solo developer — full development",
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
                <a href="tel:+380931848293" className={styles.contactLink}>
                  +380931848293
                </a>
              </li>
              <li>
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
                  HTML, CSS, JavaScript, TypeScript, React, Redux, Next.js,
                  Vue, Angular, Tailwind
                </span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.backend}</b>
                <span>Node.js, NestJS, Express, Python, REST API, Webhooks</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.database}</b>
                <span>
                  PostgreSQL, MongoDB, MySQL, Redis, Supabase, Firebase
                </span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.ai}</b>
                <span>OpenAI, Claude, Gemini, Ollama</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.automation}</b>
                <span>
                  n8n, Make, Zapier, Puppeteer, Playwright, Telegram Bots
                  (Aiogram)
                </span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.mobile}</b>
                <span>React Native, Expo</span>
              </li>
              <li>
                <b className={styles.skillLabel}>{t.tools}</b>
                <span>Git, Docker, Vite, Webpack, Electron, Claude Code</span>
              </li>
            </ul>
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
              <p className={styles.entryDesc}>
                <b className={styles.entryRole}>{t.stackLabel}</b> {job.stack}
              </p>
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
