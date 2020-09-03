import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ primary, backgroundColor, size, content, label, ...props }) => {
  const mode = primary ? 'text--primary' : 'text--secondary';
  return (
    <h2
    className={[mode].join(' ')}
      {...props}
    >
      {content}
    </h2>
  );
};

Text.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  color: PropTypes.string,
  content: PropTypes.string
};

Text.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
};
