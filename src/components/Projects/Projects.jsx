import React from "react";

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Projects
                </h2>
                <ul className={styles.projectList}>
                    <li className={styles.projectItem}>
                        <div className={styles.details}>
                            <img src={getImageUrl("projects/tictactoe4d.png")} alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};