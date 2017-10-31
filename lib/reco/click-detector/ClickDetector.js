import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isBrowser from '../utils/isBrowser';

export default class ClickDetector extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    /** Child ref handler */
    innerRef: PropTypes.func,
    /** Specify which name to use when passing `handleRef` callback to child */
    attr: PropTypes.string,
  }

  static defaultProps = {
    attr: 'ref',
  }

  componentDidMount() {
    if (isBrowser) {
      document.addEventListener('click', this.handleClick);
    }
  }

  componentWillUnmount() {
    if (isBrowser) {
      document.removeEventListener('click', this.handleClick);
    }
  }

  handleRef = (node) => {
    const { innerRef } = this.props;

    this.node = this.node || node;

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  }

  handleClick = (e) => {
    const { onOuterClick } = this.props;

    if (this.node && !this.node.contains(e.target)) {
      onOuterClick(e);
    }
  }

  render() {
    const { children: element, attr } = this.props;

    return React.cloneElement(React.Children.only(element), {
      [attr]: this.handleRef,
    })
  }
}
