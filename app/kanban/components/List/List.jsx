import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'lib';

import {
  Container, Heading, Body,
  Input, Field, FieldButton,
} from './List.styled';

import Card from '../Card';

class List extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {
      isEditMode: false,
      input: '',
      items: [],
    };
  }

  onSaveClick = () => {
    const { input } = this.state;
    this.addItem(input);
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

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
    const { heading, button } = this.props;
    const { isEditMode, items } = this.state;
    const isHasItems = items.length > 0;
    const isHasContent = isHasItems || isEditMode;

    return (
      <Container>
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
    );
  }
}

export default List;
