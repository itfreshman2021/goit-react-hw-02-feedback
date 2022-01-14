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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback = 0;
    const { good, neutral, bad } = this.state;
    countPositiveFeedback = (good / (good + neutral + bad)) * 100;
    if (!isFinite(countPositiveFeedback)) {
      return 0;
    }

    return countPositiveFeedback.toFixed(0);
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
          <p className={s.StatisticsItem}>
            Total:
            <span className={s.StatisticCount}>{this.countTotalFeedback()}</span>
          </p>
          <p className={s.StatisticsItem}>
            Positive feedback:
            <span className={s.StatisticCount}>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
