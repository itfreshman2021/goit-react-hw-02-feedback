import React from 'react';
import PropTypes from 'prop-types';
import Section from './Components/feedback/Section';
import FeedbackOptions from './Components/feedback/FeedbackOptions';
import Statistics from './Components/feedback/Statistics';

class App extends React.Component {
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
    const { state, handleAddVoute, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, neutral, bad } = state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleAddVoute} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
Section.propTypes = { title: PropTypes.string.isRequired };
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default App;
