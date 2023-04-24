import React from "react";
import styles from "./ColorDots.module.css";

const ColorDots = () => {
  return (
    <div className={styles.body}>
      <div className={styles.glowing}>
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
      </div>

      <div className={styles.glowing}>
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
      </div>

      <div className={styles.glowing}>
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
      </div>

      <div className={styles.glowing}>
        <span style={{ "--i": "1" }}></span>
        <span style={{ "--i": "2" }}></span>
        <span style={{ "--i": "3" }}></span>
      </div>
    </div>
  );
};

export default ColorDots;
