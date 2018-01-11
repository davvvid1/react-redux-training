import React, {Component} from 'react';

import classNames from 'classnames';

const Button = (props) => {
  const extraClasses = {
    clicked: props.clicked
  };
  return (
    <div className={classNames('common-element button', extraClasses)}>
      <button onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
