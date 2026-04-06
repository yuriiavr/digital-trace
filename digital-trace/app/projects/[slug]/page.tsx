'use client';

import { use } from 'react';
import Link from 'next/link';
import Container from '@/components/Container/Container';
import { useLang } from '@/contexts/Langcontext';
import { getProject, TechBlock } from '@/data/projects';
import css from '@/components/ProjectPage/ProjectPage.module.css';

function isTechBlock(item: string | TechBlock): item is TechBlock {
  return typeof item === 'object' && 'mark' in item;
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang } = useLang();
  const { slug } = use(params);
  const project = getProject(slug);

  if (!project) {
    return (
      <Container>
        <div className={css.cont}>
          <Link className={css.backbutton} href="/">
            ← Back
          </Link>
          <h1
            className={css.title}
            style={{ fontSize: "120px", color: "var(--accent)" }}
          >
            404
          </h1>
          <p className={css.sub}>
            {lang === "uk" ? "Проект не знайдено" : "Project not found"}
          </p>
        </div>
      </Container>
    );
  }

  const t = project.content[lang];
  const backLabel = lang === "uk" ? "Назад" : "Back";
  const linkUrl = project.liveUrl ?? project.githubUrl ?? "#";

  return (
    <Container>
      <div className={css.cont}>
        <Link className={css.backbutton} href="/">
          ← {backLabel}
        </Link>

        <div className={css.headerRow}>
          <h1 className={css.title} style={project.titleStyle}>
            {project.titleParts?.map((part, i) =>
              part.text === "\n" ? (
                <br key={i} />
              ) : (
                <span
                  key={i}
                  style={part.color ? { color: part.color } : undefined}
                >
                  {part.text}
                </span>
              ),
            )}
          </h1>
          <a
            className={css.visitWebsite}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.tryIt} →
          </a>
        </div>

        <div className={css.introBlock}>
          {t.intro.map((line, i) => (
            <p
              key={i}
              style={{ marginBottom: i < t.intro.length - 1 ? "12px" : 0 }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className={css.divider} />

        {t.sections.map((section, si) => (
          <div key={si}>
            <h2 className={css.sectionTitle}>{section.heading}</h2>
            <div className={css.featureList}>
              {section.items.map((item, ii) =>
                isTechBlock(item) ? (
                  <p key={ii} className={css.sub}>
                    {item.prefix}
                    <span className={css.mark}>{item.mark}</span>
                    {item.suffix}
                  </p>
                ) : (
                  <p key={ii} className={css.sub}>
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        ))}

        {/*
          Додати зображення проекту:
          <img className={css.preview} src={`/images/${params.slug}/preview.png`} alt="preview" />
        */}
      </div>
    </Container>
  );
}
