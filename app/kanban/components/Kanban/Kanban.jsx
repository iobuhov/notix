import React, { Component } from 'react';
import iScroll from 'iscroll';
import { Container, Col, Board, ScrollBox } from './Kanban-styled';
import List from '../List';

const iscrollOptions = {
  scrollbars: true,
  mouseWheel: true,
  scrollX: true,
  scrollY: false,
  click: false,
  disablePointer: true,
  eventPassthrough: true,
  mouseWheelScrollsHorizontally: false,
  fadeScrollbars: true,
};

export default class Kanban extends Component {
  render() {
    const items = [
      <List heading="Main" button="Add" />,
      <List heading="Second" button="Add" />,
      <List heading="Example" button="Add" />,
      <List heading="Cars" button="Add" />,
      <List heading="Addons" button="Add" />,
      <List heading="Packs" button="Add" />,
      <List heading="Solar" button="Add" />,
    ];

    return (
      <Container>
        <ScrollBox iScroll={iScroll} options={iscrollOptions}>
          <Board size={items.length}>
            <For each="item" index="idx" of={items}>
              <Col key={`${Math.random()}`}>
                {item}
              </Col>
            </For>
          </Board>
        </ScrollBox>
      </Container>
    );
  }
}
