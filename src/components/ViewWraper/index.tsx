import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: React.ReactNode;
}
const ViewWrapper = ({ children }: Props) => <Container>{children}</Container>;

export default ViewWrapper;
