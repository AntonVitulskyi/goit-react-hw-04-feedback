import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          Good:
          <span className={styles.value}>{good}</span>
        </li>
        <li className={styles.item}>
          Neutral:
          <span className={styles.value}>{neutral}</span>
        </li>
        <li className={styles.item}>
          Bad:
          <span className={styles.value}>{bad}</span>
        </li>
        <li className={styles.item}>
          Total:
          <span className={styles.value}>{total}</span>
        </li>
        <li className={styles.item}>
          Positive feedback:
          <span className={styles.value}>
            {positivePercentage ? positivePercentage : 0}%
          </span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
