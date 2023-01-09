import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.buttonBox}>
      {options.map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback} type="button" name={option}>
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
