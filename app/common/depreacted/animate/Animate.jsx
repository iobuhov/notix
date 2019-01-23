import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pulse } from 'animate-css-styled-components';
import { Transition } from 'react-transition-group';
import { pickPropsOf } from 'helpers';

const ENTERING = 'entering';
const ENTERED = 'entered';
const EXITING = 'exiting';
const EXITED = 'exited';

const animationType = PropTypes.shape({
  entering: PropTypes.func,
  enterd: PropTypes.func,
  exiting: PropTypes.func,
  exited: PropTypes.func,
});

export default class Animate extends PureComponent {
  static propTypes = {
    ...Transition.propTypes,
    animation: animationType,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool,
  }

  static defaultProps = {
    animation: {
      entering: Pulse,
      exiting: Pulse,
    },
    timeout: 250,
    show: false,
  }

  getDuration = (status) => {
    const { timeout } = this.props;

    if (typeof timeout !== 'number') {
      if (status === EXITING || status === EXITED) {
        return timeout.exit;
      }

      if (status === ENTERING || status === ENTERED) {
        return timeout.enter;
      }
    }

    return timeout;
  }

  animate = (status) => {
    const { children, animation } = this.props;
    const Animation = animation[status];
    const duration = this.getDuration(status);

    return (
      <Animation duration={`${duration}ms`}>
        {children}
      </Animation>
    );
  }

  handleStatus = (status) => {
    const { children, animation } = this.props;

    if (animation[status]) {
      return this.animate(status);
    }

    return children;
  }

  render() {
    const transitionProps = pickPropsOf(Transition, this.props, ['children']);
    return (
      <Transition {...transitionProps}>
        {this.handleStatus}
      </Transition>
    );
  }
}
