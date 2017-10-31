import React, { Component } from 'react';
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { isBrowser } from '../utils';

/**
 * TODO:
 * allow disable position,
 * allow specify posityon type,
 */

const absolute = ({ top, left, units = 'px' }) => ({
  position: 'absolute',
  top: `${top}${units}`,
  left: `${left}${units}`,
});

const htmlElementType = isBrowser
  ? PropTypes.instanceOf(window.HTMLElement)
  : PropTypes.any;

const positionType = PropTypes.shape({
  top: PropTypes.number,
  left: PropTypes.number,
  units: PropTypes.string,
});

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultPosition: positionType,
    mountNode: htmlElementType,
    wrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([ false ]),
    ]),
  }

  static defaultProps = {
    defaultPosition: { top: 0, left: 0 },
    mountNode: isBrowser ? document.body : null,
    wrapper: 'div',
  }

  cloneChildren = () => {
    const { children, defaultPosition } = this.props;

    return React.cloneElement(React.Children.only(children), {
      style: {
        ...children.props.style,
        ...absolute(defaultPosition),
      }
    });
  }

  createContainer = () => {
    const { children, wrapper: tagName, defaultPosition } = this.props;

    if (document.createElement(tagName) instanceof HTMLUnknownElement) {
      throw Error(`Portal wrapper is invalid tag name ('${tagName}')`);
    }

    return React.createElement(tagName, {
      style: absolute(defaultPosition),
    }, children);
  }

  renderPortal = () => {
    const { wrapper, mountNode } = this.props;

    return createPortal(
      wrapper ? this.createContainer() : this.cloneChildren(),
      mountNode || document.body,
    );
  }

  render() {
    if (!isBrowser) {
      return null;
    }

    return this.renderPortal();
  }
}
