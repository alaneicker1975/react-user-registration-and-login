import React, { Fragment } from 'react';

const Alert = (props) => {
  const { type, text } = props;

  return (
    <div className={`alert alert--${type}`}>{text}</div>
  );
};

export default Alert;