import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';
import { isFunction } from 'typechecker';
import { propsSelector } from 'helpers';
import Dropdown from 'common/dropdown';
import {
  Container,
  Heading,
  /* Body,
   * Input,
   * Field,
   * FieldButton,
   * MenuButton,
   * Menu, */
} from './CardSet-styled';

const containerProps = propsSelector(Container);

class CardSet extends PureComponent {
  static propTypes = {
    ...Container.propTypes,
    heading: string.isRequired,
    onMenuOpen: func,
  }

  static defaultProps = {
    onMenuOpen: undefined,
  }

  state = { isEditMode: false }

  handleClick = (e) => {
    this.toggleEditMode();
    this.props.onMenuOpen(e);
  }

  handleOpen = (e) => {
    const { onMenuOpen } = this.props;
    if (isFunction(onMenuOpen)) onMenuOpen(e);
  }

  toggleEditMode = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  render() {
    const { heading } = this.props;
    const { isEditMode } = this.state;

    return (
      <Container {...containerProps(this.props)}>
        <Heading className="drag-handle">
          <span>{heading}</span>
          <Dropdown open={isEditMode} onClick={this.handleClick} />
        </Heading>
      </Container>
    );
  }
}

export default CardSet;
