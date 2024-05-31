import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return <button>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
