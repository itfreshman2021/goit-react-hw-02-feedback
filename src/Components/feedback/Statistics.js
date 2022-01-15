import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.Statistics}>
    <p className={s.StatisticsItem}>
      Good:
      <span className={s.StatisticCount}>{good}</span>
    </p>
    <p className={s.StatisticsItem}>
      Neutral:
      <span className={s.StatisticCount}>{neutral}</span>
    </p>
    <p className={s.StatisticsItem}>
      Bad:
      <span className={s.StatisticCount}>{bad}</span>
    </p>
    <p className={s.StatisticsItem}>
      Total:
      <span className={s.StatisticCount}>{total}</span>
    </p>
    <p className={s.StatisticsItem}>
      Positive feedback:
      <span className={s.StatisticCount}>{positivePercentage}%</span>
    </p>
  </div>
);

export default Statistics;
