import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { isFunction } from 'typechecker';
import { CardSetRecord } from 'kanban/records';
import { Box } from './Board-styled';
import DraggableCardSet from '../DraggableCardSet';

export default (function BoardContext() {
  const controlledPosition = Symbol('controlledPosition');

  return class Board extends PureComponent {
    static propTypes = {
      dragMode: PropTypes.bool.isRequired,
      holding: PropTypes.number,
      items: ImmutablePropTypes.listOf(CardSetRecord).isRequired,
      onCardSetOverlap: PropTypes.func.isRequired,
      onDragStart: PropTypes.func.isRequired,
      onDragStop: PropTypes.func.isRequired,
      onPopupOpen: PropTypes.func,
    }

    static defaultProps = {
      holding: undefined,
      onPopupOpen: undefined,
    }

    handleCardSetEnter = (id) => {
      const { onCardSetOverlap, holding } = this.props;

      if (holding !== undefined && holding !== id) {
        onCardSetOverlap(holding, id);
      }
    }

    handleBoardLeave = () => {
      this.props.onDragStop();
    }

    onDragStart = (id) => {
      document.onselectstart = () => false;
      this.props.onDragStart(id);
    }

    onDrag = (id, e, { x, y }) => {
      this[controlledPosition] = { x, y };
      if (typeof this.props.holding === 'undefined') return false;
    }

    onDragStop = () => {
      document.onselectstart = null;
      this.positionReset();
      if (!(typeof this.props.holding === 'undefined')) {
        this.props.onDragStop();
      }
    }

    onPopupOpen = (...args) => {
      const { onPopupOpen } = this.props;
      if (isFunction(onPopupOpen)) onPopupOpen(...args);
    }

    positionReset = () => {
      this[controlledPosition] = null;
    }

    render() {
      const { items, holding, dragMode } = this.props;
      const { [controlledPosition]: controlledPos } = this;
      const isHolding = typeof holding !== 'undefined';


      return (
        <Box size={items.size} id="board" dragging={isHolding} onMouseLeave={this.handleBoardLeave}>
          <For each="record" index="idx" of={items}>
            <With
              defaultPosition={{ x: 10 + (idx * 300), y: 10 }}
              isDragging={holding === record.id}
            >
              <DraggableCardSet
                defaultPosition={defaultPosition}
                disabled={!dragMode}
                dragging={isDragging}
                key={record.id}
                position={isDragging ? controlledPos : null}
                record={record}
                silent={isHolding}
                onCardSetEnter={this.handleCardSetEnter}
                onDrag={this.onDrag}
                onMenuOpen={this.onPopupOpen}
                onStart={this.onDragStart}
                onStop={this.onDragStop}
              />
            </With>
          </For>
        </Box>
      );
    }
  };
}());
