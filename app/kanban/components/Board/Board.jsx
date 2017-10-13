import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { CardSetRecord } from 'kanban/records';
import { Box, Col } from './Board-styled';
/* import DraggableList from '../DraggableList'; */
import List from '../List';

export default (function BoardContext() {
  const controlledPosition = Symbol('controlledPosition');

  return class Board extends PureComponent {
    static propTypes = {
      items: ImmutablePropTypes.listOf(CardSetRecord).isRequired,
      // onCardDrop: PropTypes.func.isRequired,
      onCardSetOverlap: PropTypes.func.isRequired,
    }

    constructor() {
      super();
      this[controlledPosition] = undefined;
      this.state = {
        holding: undefined,
      };
    }

    onMouseEnter = (id) => {
      const { onCardSetOverlap } = this.props;
      const { holding } = this.state;

      if (holding && holding !== id) {
        onCardSetOverlap(holding, id);
      }
    }

    onDragStart = (id) => {
      this.setState({ holding: id });
    }

    onDrag = (_, { x, y }) => {
      this[controlledPosition] = { x, y };
      console.log('Position:', { x, y });
    }

    onDragStop = () => {
      this.positionReset();
      this.setState({ holding: undefined });
    }

    positionReset = () => {
      this[controlledPosition] = { x: 0, y: 0 };
    }

    render() {
      /* debugger; */
      const { items } = this.props;
      const { holding } = this.state;
      const { [controlledPosition]: pos } = this;

      return (
        <Box>
          <For each="CardSetRecord" index="idx" of={items}>
            <With id={CardSetRecord.id} position={{ x: 0 + (idx * 300), y: 0 }}>
              <Col
                key={id}
                onMouseEnter={() => this.onMouseEnter(id)}
                shadow={holding === id}
              >
                <List
                  heading={CardSetRecord.name}
                  button="Add"
                  onStart={this.onDragStart}
                  onDrag={this.onDrag}
                  onStop={this.positionReset}
                  position={holding === id ? pos : position}
                />
              </Col>
            </With>
          </For>
        </Box>
      );
    }
  };
}());
