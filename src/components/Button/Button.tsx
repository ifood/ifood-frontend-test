import React from 'react';

import './Button.scss';

import { classesFromObject } from '../../helpers/helpers';

interface IButton {
  className?: string;
  label: string;
  onClick: () => void;
}

const Button = ({
  className: classNameProp = '',
  label,
  onClick,
}: IButton) => {
  const classes = {
    'button-component': true,
  }

  const className = classesFromObject(classes, classNameProp);

  return (
    <button className={className} title={label} onClick={onClick} >
      {label}
    </button>
  );
}

export default Button;
