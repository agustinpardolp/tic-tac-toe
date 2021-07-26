import React from 'react';
import { Container, Navbar as NavbarBootstrap } from 'react-bootstrap';

import styles from './styles.module.scss';
import { title } from './constants';

const Navbar = () => (
  <NavbarBootstrap expand="lg" variant="light" className={styles.navbar}>
    <Container>
      <NavbarBootstrap.Brand>{title}</NavbarBootstrap.Brand>
    </Container>
  </NavbarBootstrap>
);

export default Navbar;
