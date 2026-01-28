"use client";

import { useEffect, useState } from "react";
import styles from "./Confetti.module.css";

const Confetti = () => {
  const [pieces, setPieces] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const confettiPieces = Array(150)
      .fill(null)
      .map((_, index) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
          transform: `rotate(${Math.random() * 360}deg)`,
        };
        return <div key={index} className={styles.confettiPiece} style={style} />;
      });
    setPieces(confettiPieces);
  }, []);

  return <div className={styles.confettiContainer}>{pieces}</div>;
};

export default Confetti;
