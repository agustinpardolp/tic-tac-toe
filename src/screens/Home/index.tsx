/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import PlayerOptions from './component/PlayerOptions';
import style from './styles.module.scss';
import { playerLabel, playerTwo, playerOne } from './constants';

const Home = () => {
  const [option, setOption] = useState();

  const handleChange = (e: React.FormEvent) => {
    console.log(e);
  };
  return (
    <Container className={style.homeContainer}>
      <Row className="g-2">
        <PlayerOptions title={playerOne} onChange={handleChange} inputLabel={playerLabel} />
      </Row>
      <Row className="g-2">
        <PlayerOptions title={playerTwo} onChange={handleChange} inputLabel={playerLabel} />
      </Row>
    </Container>
  );
};
export default Home;
