import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Alert = props => {
  const { type, text, align } = props;
  
  return (
    <div className={classNames(`alert alert--${type}`, {
      [`alert--${align}`]: align
    })}>{text}</div>
  );
};

Alert.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  align: PropTypes.string,
  type: PropTypes.string,
};

Alert.defaultProps = {
  text: '',
  align: 'left',
  type: 'info',
};

export default Alert;