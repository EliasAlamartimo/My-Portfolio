import { useEffect, useRef } from "react";
import styles from './App.module.css'

function App() {
  const maskRef = useRef(null);

  useEffect(() => {
    const updateMask = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      if (maskRef.current) {
        maskRef.current.style.setProperty("--x", x);
        maskRef.current.style.setProperty("--y", y);
      }
    };

    window.addEventListener("mousemove", updateMask);
    return () => window.removeEventListener("mousemove", updateMask);
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.Mask} ref={maskRef}></div>
    </div>
  );
};

export default App
