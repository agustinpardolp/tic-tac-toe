import React, { ChangeEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Row } from 'react-bootstrap';

import Button from '../../components/Button';
import { UserDataContext } from '../../context/NewFlowContext';
import { PlayerType } from '../../context/NewFlowContext/constants';

import PlayerOptions, { PlayerInterface } from './component/PlayerOptions';
import style from './styles.module.scss';
import { playerLabel, playerTwo, playerOne, startLabel, btnStartVariant } from './constants';

const Home = () => {
  const [playerA, setPlayersA] = useState<PlayerType>({ name: '', option: '', score: 0 });
  const [playerB, setPlayersB] = useState<PlayerType>({ name: '', option: '', score: 0 });
  const history = useHistory();
  const { changeUser } = useContext(UserDataContext);
  const handleChangePlayerA = (e: ChangeEvent<any>) => {
    setPlayersA({ ...playerA, name: e.target.value });
  };
  const handleChangePlayerB = (e: ChangeEvent<any>) => {
    setPlayersB({ ...playerB, name: e.target.value });
  };
  const handleSelectChange = (e: any, playerData: PlayerInterface) => {
    const { player, setPlayer } = playerData;
    setPlayer({ ...player, option: e.target.value });
  };

  const onClick = (e: any) => {
    e.preventDefault();
    changeUser({ playerA, playerB });
    history.push('/dashboard');
  };

  return (
    <Container className={style.homeContainer}>
      <Form onSubmit={onClick}>
        <Row className="g-2">
          <PlayerOptions
            title={playerOne}
            onChange={handleChangePlayerA}
            inputLabel={playerLabel}
            onSelectChange={handleSelectChange}
            player={{ player: playerA, setPlayer: setPlayersA }}
          />
        </Row>
        <Row className="g-2">
          <PlayerOptions
            title={playerTwo}
            onChange={handleChangePlayerB}
            inputLabel={playerLabel}
            onSelectChange={handleSelectChange}
            player={{ player: playerB, setPlayer: setPlayersB }}
          />
        </Row>
        <div className={style.btnContainer}>
          <Button onClick={onClick} label={startLabel} variant={btnStartVariant} type="submit" />
        </div>
      </Form>
    </Container>
  );
};
export default Home;
