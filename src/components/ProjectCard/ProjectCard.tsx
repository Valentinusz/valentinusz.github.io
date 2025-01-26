import styles from "./ProjectCard.module.scss";
import { Badge } from "../Badge/Badge";
import { PropsWithChildren, ReactNode } from "react";

export interface ProjectCardBadge {
  title: string;
  color: string;
}

export interface ProjectCardProps extends PropsWithChildren {
  title: string;
  description: ReactNode;
  githubLink?: string;
  banner?: string;
  badges?: ProjectCardBadge[];
}

export function ProjectCard({
  title,
  description,
  githubLink,
  banner = "/img/social-card.png",
  badges = [],
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} alt="Project icon" src={banner} />

      <div className={styles.cardLinks}>
        <a href={githubLink}>
          <img src="/img/github-mark-white.svg" className={styles.cardLink} />
        </a>
      </div>

      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.badges}>
          {badges.map(({ title, color }) => (
            <Badge key={title} color={color}>{title}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
