import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import { Col, FloatingLabel, Row } from 'react-bootstrap';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { PlayerType } from '../../../../context/NewFlowContext/constants';
import { cursor, options, selectTitle } from '../../constants';

export interface PlayerInterface {
  player: PlayerType;
  setPlayer: Dispatch<SetStateAction<PlayerType>>;
}

interface props {
  onChange: React.ComponentProps<'input'>['onChange'];
  onSelectChange: (e: FormEvent, player: PlayerInterface) => void;
  title?: string;
  inputLabel: string;
  placeholder?: string;
  player: PlayerInterface;
}
const PlayerOptions = ({ title, onChange, placeholder, inputLabel, onSelectChange, player }: props) => (
  <Row className="g-2">
    <h2>{title}</h2>
    <Col md>
      <Input label={inputLabel} onChange={onChange} placeholder={placeholder} />
    </Col>
    <Col md>
      <FloatingLabel controlId="floatingSelectGrid" label={cursor}>
        <Select options={options} selectTitle={selectTitle} onChange={e => onSelectChange(e, player)} />
      </FloatingLabel>
    </Col>
  </Row>
);

export default PlayerOptions;
