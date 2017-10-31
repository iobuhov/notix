import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'common/animated';
import { Portal } from 'lib/reco';
import { isFunction } from 'typechecker';
import { /* pick, */ sum } from 'ramda';
import { Container, Menu, MenuBox, Button } from './Dropdown-styled';

const dropdownOverlay = document.getElementById('dropdown-overlay');

export default class Dropdown extends Component {
  static propTypes = {
    absolute: PropTypes.bool, // eslint-disable-line
    left: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    open: PropTypes.bool.isRequired,
    overlay: PropTypes.bool,
    // relative: PropTypes.bool,
    top: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onClick: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    // trigger: PropTypes.node,
  }

  static defaultProps = {
    absolute: false,
    left: 0,
    overlay: true,
    // relative: false,
    top: 0,
    onOpen: undefined,
  }

  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  getMenuPosition = () => {
    const { top, left } = this.props;
    const triggerRect = this.trigger.getBoundingClientRect();

    return {
      top: sum([triggerRect.top, top]),
      left: sum([
        triggerRect.right,
        left,
      ]),
    };
  }

  handleContainerRef = (node) => {
    this.container = this.container || node;
  }

  handleTriggerRef = (node) => {
    this.trigger = this.trigger || node;
  }

  handleTriggerClick = (e) => {
    const { open: isClosed, onOpen, onClick } = this.props;

    if (isFunction(onOpen) && isClosed) {
      onOpen(e);
    }

    onClick();
  }

  renderMenu = () => {
    const { open } = this.props;
    const { mounted } = this.state;
    const menuPosition = mounted ? this.getMenuPosition() : undefined;

    return (
      <Fade in={open}>
        <MenuBox {...menuPosition} className="menu" absolute>
          <Menu>
            <ul>
              <li>menu item 1</li>
              <li>menu item 2</li>
              <li>menu item 3</li>
            </ul>
          </Menu>
        </MenuBox>
      </Fade>
    );
  }

  renderThroughPortal = () => (
    <Portal wrapper={false} mountNode={dropdownOverlay}>
      {this.renderMenu()}
    </Portal>
  )

  render() {
    const { overlay } = this.props;

    return (
      <Container className="dropdown" innerRef={this.handleContainerRef}>
        <Button onClick={this.handleTriggerClick} className="no-draggable" innerRef={this.handleTriggerRef}>
          <svg className="icon icon-dots-three-vertical">
            <use xlinkHref="#icon-dots-three-vertical" />
          </svg>
        </Button>
        {overlay ? this.renderThroughPortal() : this.renderMenu()}
      </Container>
    );
  }
}
