import PropTypes from 'prop-types';

import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <h2 className={styles.message}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
