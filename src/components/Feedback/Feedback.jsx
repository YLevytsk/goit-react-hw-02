import React from "react";
import styles from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

