import React, { useState, useEffect } from 'react';
import './App.css';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import ResetButton from './ResetButton/ResetButton';

// начальное состояние из localStorage или с нуля
const initialState = JSON.parse(localStorage.getItem('feedback')) || {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(initialState);

  // сохраняем в localStorage при каждом обновлении
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // обработка голосов
  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // обработка сброса
  const resetFeedback = () => {
    const reset = { good: 0, neutral: 0, bad: 0 };
    setFeedback(reset);
    localStorage.setItem('feedback', JSON.stringify(reset));
  };

  // расчёт статистики
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className="app">
      <h1>Café Sip Happens</h1>
      <p>Please leave your feedback by choosing an option below.</p>

      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={updateFeedback}
      />

      {total > 0 ? (
        <>
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          {/* УСЛОВНЫЙ РЕНДЕРИНГ КНОПКИ */}
          <ResetButton onReset={resetFeedback} />
        </>
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
}
