import React from 'react';
import './Button.scss';

interface Button {
  label: string,
  className?: string,
}

export const Button = ({ label, className = '' }: Button) => (
  <button type="button" className={`button ${className}`}>
    {label}
  </button>
);
