import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const { type, text, align } = props;

  return (
    <div className={classNames(`alert alert--${type}`, {
      [`alert--${align}`]: align
    })}>{text}</div>
  );
};

Alert.protoTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  align: PropTypes.string,
};

Alert.defaultProps = {
  text: null,
  align: null,
};

export default Alert;