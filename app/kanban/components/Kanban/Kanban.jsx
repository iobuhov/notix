import React, { Component } from 'react';
import {
  ContainerFluid, Row, Col,
} from 'lib';
import List from '../List';

export default class Kanban extends Component {
  render() {
    return (
      <ContainerFluid>
        <Row>
          <Col>
            <h2>Kanban</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={2.4}>
            <List heading="Main" button="Add" />
          </Col>
          <Col xs={2.4}>
            <List heading="Second" button="Add" />
          </Col>
          <Col xs={2.4}>
            <List heading="Example" button="Add" />
          </Col>
          <Col xs={2.4}>
            <List heading="Cars" button="Add" />
          </Col>
          <Col xs={2.4}>
            <List heading="Addons" button="Add" />
          </Col>
        </Row>
      </ContainerFluid>
    );
  }
}
