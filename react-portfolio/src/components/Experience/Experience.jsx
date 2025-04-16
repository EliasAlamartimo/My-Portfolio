import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Experience
                </h2>
                <ul className={styles.experienceList}>
                  <li className={styles.experienceItem}>
                    <div className={styles.date}>10.2024 - 1.2025</div>
                    <div className={styles.details}>
                      <h3>Frontend Developer Intern</h3>
                      <p>Psyche's Royale Gaming ry</p>
                      <p2>I worked on a voting system and user interface for a mobile game using Unity.</p2>
                    </div>
                  </li>
                </ul>
            </div>
        </section>
    );
};