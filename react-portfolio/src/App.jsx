import { useEffect, useRef } from "react";
import styles from './App.module.css'
import { Introduction } from "./components/Introduction/Introduction";

function App() {
  // Components
  return (
    <div className={styles.App}>
      <Introduction />
    </div>
  );
};

export default App
