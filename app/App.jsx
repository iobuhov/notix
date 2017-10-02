import React, { Component } from 'react';
import { Header } from 'lib';
import { Sidebar, Content, Page } from './styled/Layout';
import { Kanban } from './kanban';

export default class App extends Component {
  render() {
    return (
      <Page>
        <Sidebar>
          <h2>Sidebar</h2>
        </Sidebar>
        <Content>
          <Header>
            <h2>Header</h2>
          </Header>
          <Kanban />
        </Content>
      </Page>
    );
  }
}
