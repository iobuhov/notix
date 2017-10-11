import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Button } from 'lib';

import {
  Container, Heading, Body,
  Input, Field, FieldButton,
} from './List-styled';

import Card from '../Card';

/* const Placeholder = props =>
   <div style={{ position: 'absolute', background: '#333', ...props }} />; */

class List extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onDrag: PropTypes.func.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }).isRequired,
  }

  static defaultProps = {
    holding: false,
  }

  constructor() {
    super();
    this.state = {
      isEditMode: false,
      isMoving: false,
      input: '',
      items: [],
      position: { x: 0, y: 0 },
    };
    this.container = null;
  }

  onStart = (e, position) => {
    const { onStart } = this.props;
    this.setState({ isMoving: true }, () => onStart(position));
  }

  onStop = () => {
    const { onStop } = this.props;

    this.setState({ isMoving: false }, onStop);

    this.container.style.transition = 'transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1)';
  }

  onSaveClick = () => {
    const { input } = this.state;
    this.addItem(input);
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onContainerDidMount = (node) => {
    this.container = this.container || node;
    this.container.addEventListener('transitionend', this.onContainerTransitionEnd);
  };

  onContainerTransitionEnd = () => { this.container.style.transition = 'none'; };

  getPlaceholderSize = () => ({
    width: this.container.offsetWidth,
    height: this.container.offsetHeight,
  });

  toggleEditMode = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  addItem = (item) => {
    this.setState(prev => ({
      items: [item, ...prev.items],
      input: '',
    }));
    this.toggleEditMode();
  }

  render() {
    const { heading, button, onDrag, position } = this.props;
    const { isEditMode, items } = this.state;
    const isHasItems = items.length > 0;
    const isHasContent = isHasItems || isEditMode;

    console.log('list.render');

    return (
      <Draggable
        bounds="#board"
        onStart={this.onStart}
        onDrag={onDrag}
        onStop={this.onStop}
        position={position}
      >
        <Container innerRef={this.onContainerDidMount}>
          <Heading>
            <span>{heading}</span>
            <Button onClick={this.toggleEditMode}>{button}</Button>
          </Heading>
          <If condition={isHasContent}>
            <Body>
              <If condition={isEditMode}>
                <Field>
                  <Input type="text" onChange={this.onInputChange} />
                  <FieldButton onClick={this.onSaveClick}>Save</FieldButton>
                  <FieldButton>Cancel</FieldButton>
                </Field>
              </If>
              <If condition={isHasItems}>
                <For each="item" of={items}>
                  <Card key={item} value={item} />
                </For>
              </If>
            </Body>
          </If>
        </Container>
      </Draggable>
    );
  }
}

export default List;
