import React, { PureComponent } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import { isFunction } from 'typechecker';
import Transition, { EXITING } from 'react-transition-group/Transition';
import { CardSetRecord } from 'kanban/records';
import { propsSelector } from 'helpers';
import { Container, Wrapper } from './DraggableCardSet-styled';
import CardSet from '../CardSet';

const draggableProps = propsSelector(Draggable);

const initialPosition = { x: 0, y: 0 };

export default class DraggableCardSet extends PureComponent {
  static propTypes = {
    ...Draggable.propTypes,
    dragging: PropTypes.bool,
    record: PropTypes.instanceOf(CardSetRecord).isRequired,
    silent: PropTypes.bool,
    onCardSetEnter: PropTypes.func,
    onMenuOpen: PropTypes.func,
  }

  static defaultProps = {
    bounds: '#board',
    cancel: '.no-draggable',
    disabled: false,
    dragging: false,
    handle: '.drag-handle',
    silent: false,
    onCardSetEnter: undefined,
    onMenuOpen: undefined,
  }

  state = { inFront: false }

  createHandler = key => (...args) => {
    const { record: { id } } = this.props;
    const handler = this.props[key];
    if (isFunction(handler)) handler(id, ...args);
  }

  handleDrag = this.createHandler('onDrag');

  handleStart = this.createHandler('onStart');

  handleStop = this.createHandler('onStop');

  handleMouseEnter = this.createHandler('onCardSetEnter');

  handleMenuOpen = this.createHandler('onMenuOpen');

  handleStatus = (status) => {
    this.status = status;
    return this.renderCardSet();
  }

  renderCardSet = () => {
    const { silent, dragging, disabled, position, defaultPosition } = this.props;
    const dropping = (this.status === EXITING);
    const dragged = (dragging || dropping);
    const draggablePosition = dragged                       // if dragged
                            ? (position || defaultPosition) // use one of provided position
                            : initialPosition;              // otherwise reset to (0,0);

    return (
      <Draggable
        {...draggableProps(this.props)}
        position={draggablePosition}
        onDrag={this.handleDrag}
        onStart={this.handleStart}
        onStop={this.handleStop}
      >
        <Wrapper
          dragged={dragged}
          dragging={dragging}
          dropping={dropping}
          silent={silent}
          withHandle={!disabled && !dragging}
        >
          <CardSet
            heading={this.props.record.name}
            onMenuOpen={this.handleMenuOpen}
          />
        </Wrapper>
      </Draggable>
    );
  }

  render() {
    return (
      <Container
        dark={this.props.dragging}
        frontal={this.state.inFront}
        onMouseEnter={this.handleMouseEnter}
      >
        <Transition in={this.props.dragging} timeout={350}>
          {this.handleStatus}
        </Transition>
      </Container>
    );
  }
}
