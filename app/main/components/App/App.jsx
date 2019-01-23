import Kanban from 'kanban';
import React, { PureComponent } from 'react';
import { SidebarConnector as Sidebar } from 'main/connectors';
import {
  Content,
  Layout,
  Nav,
} from './App-styled';

export default class App extends PureComponent {
  state = { open: false }

  render() {
    const { open } = this.state;

    return (
      <Layout>
        <Nav marginLeft={open ? 0 : -250}>
          <Sidebar />
        </Nav>
        <Content>
          <Kanban />
        </Content>
      </Layout>
    );
  }
}
