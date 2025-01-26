import { PropsWithChildren } from "react";
import styles from "./Badge.module.scss"

export interface BadgeProps extends PropsWithChildren {
  color?: string;
}

export function Badge({ color, children }: BadgeProps) {
  return <span className={styles.badge} style={{backgroundColor: color}}>{children}</span>;
}
