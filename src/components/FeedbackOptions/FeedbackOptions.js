import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={styles.divB}>
    <button
      className={styles.btn}
      type="button"
      onClick={onLeaveFeedback}
      name={options.GOOD}
    >
      Good
    </button>
    <button
      className={styles.neutraBtn}
      type="button"
      onClick={onLeaveFeedback}
      name={options.NEUTRAL}
    >
      Neutral
    </button>
    <button
      className={styles.badBtn}
      type="button"
      onClick={onLeaveFeedback}
      name={options.BAD}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
