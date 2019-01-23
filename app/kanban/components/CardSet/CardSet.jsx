import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';
import { isFunction } from 'typechecker';
import { propsSelector } from 'helpers';
import Dropdown from 'common/dropdown';
import { default as Menu } from './CardSetMenu';
import { default as MenuButton } from './CardSetMenuButton';
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

  state = {
    isEditMode: false,
    isMenuOpen: false,
  }

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

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const { heading } = this.props;
    // const { isMenuOpen } = this.state;

    return (
      <Container {...containerProps(this.props)}>
        <Heading className="drag-handle">
          <span>{heading}</span>
          <Dropdown>
            <MenuButton className="no-draggable" />
            <Menu />
          </Dropdown>
        </Heading>
      </Container>
    );
  }
}

export default CardSet;
