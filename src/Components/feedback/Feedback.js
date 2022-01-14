import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddVoute = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    return (
      <div className={s.Feedback}>
        <b className={s.title}>Please leave feedback</b>
        <div className={s.FeedbackOptions}>
          <button
            type="button"
            className={s.FeedbackOptionsItem}
            onClick={this.handleAddVoute}
            name="good"
          >
            Good
          </button>
          <button
            type="button"
            className={s.FeedbackOptionsItem}
            onClick={this.handleAddVoute}
            name="neutral"
          >
            Neutral
          </button>
          <button
            type="button"
            className={s.FeedbackOptionsItem}
            onClick={this.handleAddVoute}
            name="bad"
          >
            Bad
          </button>
        </div>
        <div className={s.Statistics}>
          <h2 className={s.title}>Statistics</h2>
          <p className={s.StatisticsItem}>
            Good:
            <span className={s.StatisticCount}>{this.state.good}</span>
          </p>
          <p className={s.StatisticsItem}>
            Neutral:
            <span className={s.StatisticCount}>{this.state.neutral}</span>
          </p>
          <p className={s.StatisticsItem}>
            Bad:
            <span className={s.StatisticCount}>{this.state.bad}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
