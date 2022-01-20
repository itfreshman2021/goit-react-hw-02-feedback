import React from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

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
    const { good } = this.state;
    countPositiveFeedback = (good / this.countTotalFeedback()) * 100;
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
        {countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="No feedback given" />
          </Section>
        )}
      </>
    );
  }
}

export default App;
