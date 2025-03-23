import React from 'react';
import styles from './Options.module.css';

export default function Options({ options, onLeaveFeedback, onReset, hasFeedback }) {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {hasFeedback && (
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

