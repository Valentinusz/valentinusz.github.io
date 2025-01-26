import styles from "./ProjectCardContainer.module.scss"
import {PropsWithChildren} from "react";

export type ProjectCardContainerProps = PropsWithChildren

export function ProjectCardContainer({children}: ProjectCardContainerProps) {
    return <div className={styles.div}>{children}</div>
}
