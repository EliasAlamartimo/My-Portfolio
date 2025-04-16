import { useEffect, useRef } from "react";
import styles from './App.module.css'
import { Introduction } from "./components/Introduction/Introduction";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";

function App() {
  // Components
  return (
    <div className={styles.App}>
      <Introduction />
      <About />
      <Experience />
    </div>
  );
};

export default App
