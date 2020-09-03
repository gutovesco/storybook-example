import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ primary, backgroundColor, size, borderRadius, label, ...props }) => {
  const mode = primary ? 'input--primary' : 'input--secondary';
  return (
    <input
    placeholder="Digite aqui"
    className={[`input--${size}`, mode].join(' ')}
      {...props}
      style={{borderRadius: borderRadius}}
    >
    </input>
  );
};

Input.propTypes = {
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
  label: PropTypes.string.isRequired,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,

  borderRadius: PropTypes.number,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onChange: (e) => console.log(e.target.value),
};
