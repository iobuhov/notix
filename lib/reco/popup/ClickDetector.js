import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ClickDetector extends PureComponent {
  static propTypes = {
    onOuterClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    innerRef: PropTypes.func,
    isStyledChild: PropTypes.bool,
  }

  static defaultProps = {
    innerRef: undefined,
    isStyledChild: false,
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  setElementRef = (node) => {
    const { innerRef } = this.props;
    this.node = this.node || node;

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  }

  handleClick = (e) => {
    if (this.node && !this.node.contains(e.target)) {
      console.log('outer click');
      this.props.onOuterClick(e);
    }
  }

  render() {
    const { children: element, isStyledChild } = this.props;
    const refkey = isStyledChild ? 'innerRef' : 'ref';

    return React.cloneElement(React.Children.only(element), {
      [refkey]: this.setElementRef,
    });
  }
}
