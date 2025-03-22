import React from "react";
import styles from "./ResetButton.module.css";

export default function ResetButton({ onReset }) {
  return (
    <button className={styles.button} onClick={onReset}>
      Reset
    </button>
  );
}
