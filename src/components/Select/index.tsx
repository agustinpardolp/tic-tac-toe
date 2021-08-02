import React from 'react';
import { Form } from 'react-bootstrap';

import { SelectProps } from '../../types';

interface Props {
  options: SelectProps[];
  selectTitle?: string;
  value?: SelectProps;
}

const Select = ({ options, selectTitle, value }: Props) => (
  <Form.Select aria-label="select" defaultValue={value?.value}>
    <option>{selectTitle}</option>
    {options &&
      options.map((option: SelectProps) => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
  </Form.Select>
);

export default Select;
