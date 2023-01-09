import { useState } from 'react';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

const Feedback = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
 

 const onClickChangeValue = (event) => {
switch (event.target.name) {
  case "good":
    setGood(good + 1);
    break;
    case "neutral":
      setNeutral(neutral + 1)
    break;
    case "bad":
      setBad(bad + 1)
    break;
  default:
    break;
}
  };

    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100) || 0;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good","neutral", "bad" ]}
            onLeaveFeedback={onClickChangeValue}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }

export default Feedback;