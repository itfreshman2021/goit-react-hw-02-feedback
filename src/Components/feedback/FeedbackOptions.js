import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.FeedbackOptions}>
    {options.map(option => (
      <button
        type="button"
        className={s.FeedbackOptionsItem}
        onClick={onLeaveFeedback}
        name={option}
        key={option}
      >
        {option[0].toLocaleUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
