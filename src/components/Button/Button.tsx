import React from 'react';

import './Button.scss';

import { classesFromObject } from '../../helpers/helpers';

interface IButton {
  className?: string;
  label: string;
}

const Button = ({
  className: classNameProp = '',
  label
}: IButton) => {
  const classes = {
    'button-component': true,
  }

  const className = classesFromObject(classes, classNameProp);

  return (
    <button className={className} title={label} >
      {label}
    </button>
  );
}

export default Button;
