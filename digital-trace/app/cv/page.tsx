"use client";

import Container from "@/components/Container/Container";
import { useLang } from "@/contexts/Langcontext";
import styles from "./cvpage.module.css";
import Image from "next/image";

const content = {
  uk: {
    fullName: "Аврамець Юрій",
    position: "Full-Stack Розробник",
    location: "Україна, Київ",
    github: "GitHub",
    mob: "Моб",
    mail: "Пошта",
    skillsTitle: "Навички",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    softSkills: "Soft Skills:",
    aboutMe:
      "Я Full-Stack розробник з більш ніж 2-річним досвідом у створенні веб- та мобільних додатків. Спеціалізуюся на JavaScript, React, Node.js, Python та React Native. Зосереджений на створенні високопродуктивних, зручних для користувача продуктів.",
    experienceTitle: "Досвід",
    fullStackDev: "Full-Stack Розробник",
    FiretraffPeriod: "Квітень 2023 — Березень 2026",
    FiretraffCompany: "Firetraff — Київ, Україна",
    FiretraffDesc:
      "Автоматизував внутрішні процеси компанії: автоматизація генерації лендингів, створення сервісу для email-кампаній зі статистикою переглядів, моніторинг стану серверів.",
    frontendDev: "Frontend Розробник",
    freelancePeriod: "Жовтень 2022 — Квітень 2023",
    freelanceCompany: "Фріланс",
    freelanceDesc:
      "Виконував фриланс-проекти, розробляв особисті продукти, вивчав нові технології.",
    contentManiaPeriod: "Квітень 2022 — Жовтень 2022",
    contentManiaCompany: "Content Mania — Київ, Україна",
    contentManiaDesc:
      "Pixel-perfect верстка сайтів та лендингів, адаптивна розробка.",
    educationTitle: "Освіта",
    neoversityDegree: "Магістр",
    neoversitySpecialty: "Програмна інженерія",
    neoversityPeriod: "Вересень 2024 — донині",
    goitDegree: "Full-stack Front-End Розробник",
    goitPeriod: "Листопад 2021 — Вересень 2022",
    kneuDegree: "Бакалавр",
    kneuSpecialty: "Облік та податковий менеджмент",
    kneuPeriod: "Вересень 2017 — Червень 2021",
    languagesTitle: "Мови",
    ukrainianLang: "Українська — Рідна (C2)",
    englishLang: "Англійська — Upper-Intermediate (B2)",
    downloadPdf: "Скачати PDF",
    printCv: "Роздрукувати",
  },
  en: {
    fullName: "Yurii Avramets",
    position: "Full-Stack Developer",
    location: "Ukraine, Kyiv",
    github: "GitHub",
    mob: "Phone",
    mail: "Email",
    skillsTitle: "Skills",
    frontend: "Frontend:",
    backend: "Backend:",
    mobile: "Mobile:",
    database: "Database:",
    tools: "Tools:",
    softSkills: "Soft Skills:",
    aboutMe:
      "I am a Full-Stack Developer with over 2 years of experience in building web and mobile applications. I specialize in JavaScript, React, Node.js, Python and React Native. Focused on delivering high-performing, user-friendly products.",
    experienceTitle: "Experience",
    fullStackDev: "Full-Stack Developer",
    FiretraffPeriod: "April 2023 — March 2026",
    FiretraffCompany: "Firetraff — Kyiv, Ukraine",
    FiretraffDesc:
      "Automated internal company processes: streamlined landing page generation, developed an email campaign service with view statistics, and implemented server health monitoring.",
    frontendDev: "Frontend Developer",
    freelancePeriod: "October 2022 — April 2023",
    freelanceCompany: "Freelance",
    freelanceDesc:
      "Freelance projects, personal products, new technologies exploration.",
    contentManiaPeriod: "April 2022 — October 2022",
    contentManiaCompany: "Content Mania — Kyiv, Ukraine",
    contentManiaDesc:
      "Pixel-perfect websites and landing pages, responsive web development.",
    educationTitle: "Education",
    neoversityDegree: "Master's Degree",
    neoversitySpecialty: "Software Engineering",
    neoversityPeriod: "September 2024 — Present",
    goitDegree: "Full-stack Front-End Developer",
    goitPeriod: "November 2021 — September 2022",
    kneuDegree: "Bachelor's Degree",
    kneuSpecialty: "Accounting & Management Taxation",
    kneuPeriod: "September 2017 — June 2021",
    languagesTitle: "Languages",
    ukrainianLang: "Ukrainian — Native (C2)",
    englishLang: "English — Upper-Intermediate (B2)",
    downloadPdf: "Download PDF",
    printCv: "Print",
  },
};

export default function CVPage() {
  const { lang } = useLang();
  const t = content[lang];

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
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{t.github}</span>
                <a
                  href="https://github.com/yuriiavr"
                  className={styles.contactLink}
                >
                  yuriiavr
                </a>
              </li>
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
          </div>

          <div className={styles.sideSection}>
            <h3 className={styles.skillsHeading}>{t.skillsTitle}</h3>
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
                <b className={styles.skillLabel}>{t.softSkills}</b>
                <span>Problem-solving, teamwork, adaptability</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className={styles.main}>
          <p className={styles.aboutMe}>{t.aboutMe}</p>

          <h2 className={styles.sectionHeading}>{t.experienceTitle}</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>{t.fullStackDev}</h3>
              <span className={styles.entryDate}>{t.FiretraffPeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.FiretraffCompany}</span>
            <p className={styles.entryDesc}>{t.FiretraffDesc}</p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>{t.frontendDev}</h3>
              <span className={styles.entryDate}>{t.freelancePeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.freelanceCompany}</span>
            <p className={styles.entryDesc}>{t.freelanceDesc}</p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3 className={styles.entryTitle}>{t.frontendDev}</h3>
              <span className={styles.entryDate}>{t.contentManiaPeriod}</span>
            </div>
            <span className={styles.entryCompany}>{t.contentManiaCompany}</span>
            <p className={styles.entryDesc}>{t.contentManiaDesc}</p>
          </div>

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
            <p className={styles.entryCompany}>{t.ukrainianLang}</p>
            <p className={styles.entryCompany}>{t.englishLang}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
