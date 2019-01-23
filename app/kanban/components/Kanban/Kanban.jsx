import React, { PureComponent } from 'react';
import Page from 'common/page';
import { BoardConnector as Board } from 'kanban/connectors';
import { Container } from './Kanban-styled';

export default class Kanban extends PureComponent {
  render() {
    const header = <h2>Header</h2>;

    return (
      <Page header={header}>
        <Container>
          <Board />
        </Container>
      </Page>
    );
  }
}
