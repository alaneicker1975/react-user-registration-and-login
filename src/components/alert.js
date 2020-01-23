import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const { type, text } = props;

  return (
    <div className={`alert alert--${type}`}>{text}</div>
  );
};

Alert.protoTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])
};

Alert.defaultProps = {
  text: null,
};

export default Alert;