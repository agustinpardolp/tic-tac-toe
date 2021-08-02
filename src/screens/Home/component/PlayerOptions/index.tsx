import React from 'react';
import { Col, FloatingLabel, Row } from 'react-bootstrap';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { cursor, options, selectTitle } from '../../constants';

interface props {
  onChange: React.ComponentProps<'input'>['onChange'];
  title?: string;
  inputLabel: string;
  placeholder?: string;
}
const PlayerOptions = ({ title, onChange, placeholder, inputLabel }: props) => (
  <Row className="g-2">
    <h2>{title}</h2>
    <Col md>
      <Input label={inputLabel} onChange={onChange} placeholder={placeholder} />
    </Col>
    <Col md>
      <FloatingLabel controlId="floatingSelectGrid" label={cursor}>
        <Select options={options} selectTitle={selectTitle} />
      </FloatingLabel>
    </Col>
  </Row>
);

export default PlayerOptions;
