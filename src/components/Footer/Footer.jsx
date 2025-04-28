import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Elias Alamartimo. All rights reserved.</p>
        </footer>
    );
};