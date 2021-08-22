import React, { MouseEventHandler } from 'react';
import { Button as ButtonComponent } from 'react-bootstrap';

interface Props {
  onClick: MouseEventHandler<HTMLElement>;
  type?: string;
  placeholder?: string;
  label: string;
  variant?: string;
}

const Button = ({ onClick, type, placeholder, label, variant }: Props) => (
  <ButtonComponent
    type={type || 'text'}
    placeholder={placeholder}
    onClick={onClick}
    variant={variant || 'primary'}
  >
    {label}
  </ButtonComponent>
);

export default Button;
