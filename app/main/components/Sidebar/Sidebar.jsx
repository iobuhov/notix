import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { safeInvoke } from 'helpers';
import {
  Container,
  Header,
} from './Sidebar-styled';

export default class Sidebar extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    isOpen: false,
    onToggle: undefined,
  }

  handleMenuClick = (e) => {
    const { onToggle } = this.props;

    safeInvoke(onToggle, e);
  }

  render() {
    const { isOpen } = this.props;
    const btnClass = 'hamburger hamburger--squeeze';
    const mod = isOpen ? 'is-active' : '';

    return (
      <Container xxx={isOpen}>
        <Header>
          <a href="/" className="logo">Notix</a>
          <button className={`${btnClass} ${mod}`} onClick={this.handleMenuClick}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </Header>
      </Container>
    );
  }
}
