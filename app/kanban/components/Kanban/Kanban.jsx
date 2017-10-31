import React, { Component } from 'react';
import { Container } from './Kanban-styled';
import BoardConnector from '../../connectors/BoardConnector';

export default class Kanban extends Component {
  render() {
    return (
      <Container>
        <BoardConnector />
      </Container>
    );
  }
}
