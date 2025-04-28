import React, { useState } from "react";

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleClosePopup = () => {
        setSelectedProject(null);
    };

    const projects = [
        {
            id: 1,
            title: "Arctic Playground",
            description: "A Snowy VR Sandbox game",
            image: getImageUrl("projects/ArcticPlayground.png"),
            video: getImageUrl("projects/ArcticPlaygroundAD.mp4"),
            moreInfo: "Arctic Playground is a vr physics sandbox experience, where you can build with snow. We did this game in a team of 5, me being the gameplay programmer. In this game I made a custom pickup and building system that allowed you to pick up snow and build rigid structures. This game was made for us to learn the use of VR-tools available in Unity. We also showed the game at the finnish gaming event Vectorama, where the game got a lot of good feedback"
        },

        {
            id: 2,
            title: "Conqueror of the Jungle",
            description: "A 3D doom inspired first person shooter",
            image: getImageUrl("projects/coj.png"),
            video: getImageUrl("projects/coj-trailer.mp4"),
            moreInfo: "Conqueror of the Jungle is a 3D doom inspired first person shooter that I made paired with a classmate. This project was used to learn the Unity game engine. This game had multiple mechanics such as weapon and character upgrades and enemies that chase the player. Also in this project we learnt to use github desktop for version control."
        },
    ];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Projects</h2>
                <ul className={styles.projectList}>
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className={styles.projectItem}
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className={styles.projectCard}>
                                <img src={project.image} alt={project.title} />
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedProject && (
                <div className={styles.popupOverlay} onClick={handleClosePopup}>
                    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>
                        <video 
                            src={selectedProject.video} 
                            controls 
                            className={styles.popupVideo}
                        />
                        <p>{selectedProject.moreInfo}</p>
                        <button className={styles.closeButton} onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};
