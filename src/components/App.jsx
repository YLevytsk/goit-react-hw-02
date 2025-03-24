import React, { useState, useEffect } from 'react';
import './App.css';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

const initialState = JSON.parse(localStorage.getItem('feedback')) || {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className="app">
      <Description />
      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        hasFeedback={total > 0}
      />
      {}
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
}


