/* eslint-disable */
import React, { Component } from 'react';
import iScroll from 'iscroll';
import { Container, ScrollBox } from './Kanban-styled';
import Board from '../Board';

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

/* <ScrollBox iScroll={iScroll} options={iscrollOptions}>
 * </ScrollBox>
 * */

export default class Kanban extends Component {
  render() {
    return (
      <Container>
        <Board />
      </Container>
    );
  }
}
