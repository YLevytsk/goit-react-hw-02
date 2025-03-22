import React from 'react';
import styles from './Options.module.css';

export default function Options({ options, onLeaveFeedback }) {
  return (
    <div className={styles.options}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

