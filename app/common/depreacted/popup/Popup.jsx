import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FadeIn, FadeOut } from 'animate-css-styled-components';
import { Transition } from 'react-transition-group';
import { ClickDetector } from 'lib/reco/popup';
import { pickPropsOf } from 'helpers';

const duration = 250;

const AnimationPropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.func,
]);

export default class Popup extends PureComponent {
  static propTypes = {
    ...ClickDetector.propTypes,
    animation: PropTypes.shape({
      entering: AnimationPropType,
      enterd: AnimationPropType,
      exiting: AnimationPropType,
    }),
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    animation: {
      entering: FadeIn,
      entered: undefined,
      exiting: FadeOut,
    },
  }

  mapStatusToAnimation = status => this.props.animation[status];

  createStatusHandler = () => {
    const detectorProps = pickPropsOf(ClickDetector, this.props);

    return (status) => {
      console.log(status);
      const Animation = this.mapStatusToAnimation(status);

      if (Animation) {
        return (
          <Animation duration={`${duration}ms`}>
            <ClickDetector {...detectorProps} />
          </Animation>
        );
      }

      return (
        <ClickDetector {...detectorProps} />
      );
    };
  }

  render() {
    const { isOpen } = this.props;
    return (
      <Transition
        in={isOpen}
        timeout={duration}
        mountOnEnter
        unmountOnExit
      >
        {this.createStatusHandler()}
      </Transition>
    );
  }
}
