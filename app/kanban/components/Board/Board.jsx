import React, { Component } from 'react';
import { Box, Col } from './Board-styled';
import List from '../List';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      holding: null,
      holdingPosition: null,
      items: [
        'Main', 'Second', 'Example',
        'Cars', 'Addons', 'Packs',
        'Soda', 'Vaccum', 'Lake',
      ],
    };
  }

  onMouseEnter = index => () => {
    const { holding } = this.state;
    if (holding !== null) {
      if (holding !== index) {
        this.swap(index, holding);
      }
    }

    /* console.log(this.state.holding, index); */
  };

  onDragStart = id => (position) => {
    const { x, y } = position;
    this.setState({ holding: id, holdingPosition: { x, y } });
  };

  onDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ holdingPosition: { x, y } });
  }

  onDragEnd = () => {
    this.setState({
      holding: null,
      holdingPosition: { x: 0, y: 0 },
    });
  };

  getPosition = index => ({ x: index * 300, y: 0 });

  swap = (a, b) => {
    const { items } = this.state;
    const item = items[a];
    items[a] = items[b];
    items[b] = item;

    this.setState({
      items: [...items],
      holding: a,
    });
  }

  render() {
    const { items, holding, holdingPosition } = this.state;
    const isHolding = (holding !== null) && (holdingPosition !== null);
    return (
      <Box id="board" size={items.length}>
        <For each="item" index="idx" of={items}>
          <Col key={`col${item}`} onMouseEnter={this.onMouseEnter(idx)} shadow={holding === idx}>
            <List
              heading={item}
              button="Add"
              onStart={this.onDragStart(idx)}
              onDrag={this.onDrag}
              onStop={this.onDragEnd}
              position={(isHolding && holding === idx) ? holdingPosition : this.getPosition(idx)}
            />
          </Col>
        </For>
      </Box>
    );
  }
}
