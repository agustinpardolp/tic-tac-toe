import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

interface Props {
  onChange: React.ComponentProps<'input'>['onChange'];
  label?: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ label, onChange, type, placeholder }: Props) => (
  <FloatingLabel controlId="floatingInputGrid" label={label}>
    <Form.Control type={type || 'text'} placeholder={placeholder} onChange={onChange} />
  </FloatingLabel>
);

export default Input;
