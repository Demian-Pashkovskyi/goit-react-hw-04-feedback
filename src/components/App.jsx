import React, { useState } from 'react';
import { Box } from './Styled/Box';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const isNoFeedback = !good && !neutral && !bad;

  const changeStat = evt => {
    const statName = evt.target.name;

    switch (statName) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;

      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;

      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        throw new Error('No such option');
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, num) => acc + num, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Box
        display="flex"
        flexDirection="column"
        listStyle="none"
        mr="20px"
        mt="20px"
        p="0">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onSendFeedback={changeStat}
        />
      </Section>

      <Section title="Statistics">
        {isNoFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveValue={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Box>
  );
};
