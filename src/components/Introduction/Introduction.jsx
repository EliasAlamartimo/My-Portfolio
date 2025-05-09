import React from "react";
import { MapPin , Mail } from "lucide-react";

import styles from "./Introduction.module.css";
import { getImageUrl } from "../../utils";

export const Introduction = () => {
    return (
        <section className={styles.container}>
            <img className={styles.image} src={getImageUrl("hero/Pärstä.jpg")} alt="" />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    I'm Elias
                </h1>
                <h2 className={styles.description}>
                    And I'm a Game Developer
                </h2>
                <p className={styles.location}>
                    <MapPin className={styles.mapPin} />
                    Oulu, Finland
                </p>
                <p className={styles.mail}>
                    <Mail className={styles.mailIcon} />
                    ela.samuel.06@gmail.com
                </p>
            </div>
        </section>
    );
};