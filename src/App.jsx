import { useEffect, useRef } from "react";
import styles from './App.module.css'
import { Introduction } from "./components/Introduction/Introduction";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  // Components
  return (
    <div className={styles.App}>
      <Introduction />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default App
