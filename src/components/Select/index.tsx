/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';

import { SelectProps } from '../../types';

interface Props {
  options: SelectProps[];
  selectTitle?: string;
  onChange: ChangeEventHandler<any>;
}

const Select = ({ options, selectTitle, onChange }: Props) => (
  <Form.Control aria-label="select" as="select" onChange={onChange}>
    <option>{selectTitle}</option>
    {options &&
      options.map((option: SelectProps) => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
  </Form.Control>
);

export default Select;
