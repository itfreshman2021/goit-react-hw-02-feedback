import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
