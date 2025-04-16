import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    About
                </h2>
                <p className={styles.description}>
                    My name is Elias and I'm a Software/Game Developer from Finland. I am currently a third-year student in the Vocational College of Oulu OSAO.
                </p>
            </div>
        </section>
    );
};