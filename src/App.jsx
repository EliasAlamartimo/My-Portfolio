import { useEffect, useRef } from "react";
import styles from './App.module.css'
import { Introduction } from "./components/Introduction/Introduction";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  // Components
  return (
    <div className={styles.App}>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App
