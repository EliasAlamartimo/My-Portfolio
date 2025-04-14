import React from "react";

import styles from "./Introduction.module.css";
import { getImageUrl } from "../../utils";

export const Introduction = () => {
    return (
        <section className={styles.container}>
            <img className={styles.image} src={getImageUrl("hero/Pärstä.jpg")} alt="" />
            <div className={styles.content}>

                <h1 className={styles.title}>
                    Hi! I'm Elias
                </h1>
                <h2 className={styles.description}>
                    And I'm a software developer
                </h2>
            </div>
        </section>
    );
};