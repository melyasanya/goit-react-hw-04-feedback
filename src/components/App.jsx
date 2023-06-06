import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keyArray = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = name => {
    if (name === 'good') {
      setGood(good + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'bad') {
      setBad(bad + 1);
    }
  };
  const onTotal = () => {
    return good + neutral + bad;
  };
  const onPositivePercentage = () => {
    return Math.round((good / onTotal()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={keyArray} />
      </Section>

      <Section title={'Statistics'}>
        {onTotal() === 0 ? (
          <NotificationMessage message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={onTotal()}
            positivePercentage={onPositivePercentage()}
          />
        )}
      </Section>
    </>
  );
};
