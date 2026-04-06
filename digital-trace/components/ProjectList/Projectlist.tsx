import Link from "next/link";
import styles from "./ProjectList.module.css";
import { useEffect, useRef } from "react";

const projects = [
  {
    slug: "amusements",
    title: "Amusements",
    tech: "Next.js · TypeScript",
    background: "url(/projects/amusements.png)",
  },
  {
    slug: "emailSender",
    title: "Email Sender",
    tech: "React · Node.js · Redis",
    background: "url(/projects/emailSender.png)",
  },
  {
    slug: "passwordManager",
    title: "Pass.Manager",
    tech: "Electron",
    background: "url(/projects/passwordManager.png)",
  },
  {
    slug: "luna",
    title: "LUNA",
    tech: "React · Node.js",
    background: "url(/projects/luna.png)",
  },
  {
    slug: "foddies",
    title: "Foddies",
    tech: "TypeScript · React · Node.js",
    background: "url('/projects/foodies.png')",
  },
  {
    slug: "aliasai",
    title: "AliasAI",
    tech: "Next.js · Gemini AI",
    background: "url(/projects/AliasAI.png)",
  },
  {
    slug: "whisperoffate",
    title: "Whisper of Fate",
    tech: "TypeScript · Gemini AI",
    background: "url(/projects/WhisperOfFate.png)",
  },
  {
    slug: "aifixer",
    title: "AI Fixer",
    tech: "Electron · Gemini AI",
    background: "url(/projects/AiFixer.png)",
  },
  {
    slug: "threads",
    title: "Threads",
    tech: "Next.js · Supabase",
    background: "url(/projects/Threads.png)",
  },
  {
    slug: "keyframe",
    title: "Keyframe",
    tech: "Next.js · TypeScript",
    background: "url('/projects/Keyframe.png')",
  },
];

export default function ProjectList() {
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const options = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        } else {
          entry.target.classList.remove(styles.active);
        }
      });
    }, options);

    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <ul className={styles.grid} ref={gridRef}>
      {projects.map((p) => (
        <li key={p.slug} className={styles.card}>
          <Link
            href={`/projects/${p.slug}`}
            className={styles.cardLink}
            style={{
              backgroundImage: p.background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className={styles.dot} />
            <span className={styles.tech}>{p.tech}</span>
            <span className={styles.title}>{p.title}</span>
            <div className={styles.overlay}>
              <span className={styles.overlayText}></span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
