import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClickDetector from './ClickDetector';

export default class Popup extends PureComponent {
  static propTypes = {
    ...ClickDetector.propTypes,
    isOpen: PropTypes.bool.isRequired,
  }

  render() {
    const { isOpen, children, ...props } = this.props;

    return isOpen ? (
      <ClickDetector {...props}>
        {children}
      </ClickDetector>
    ) : null;
  }
}
