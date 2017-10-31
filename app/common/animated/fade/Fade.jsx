import React from 'react';
import { FadeIn, FadeOut } from 'animate-css-styled-components';
import { pickPropsOf } from 'helpers';
import Animate from '../../animate';

const animatePropTypes = { ...Animate.propTypes };
delete animatePropTypes.animation;

console.log(animatePropTypes);

const animation = {
  entering: FadeIn,
  exiting: FadeOut,
};

export default function Fade(props) {
  const animateProps = pickPropsOf(Animate, props, ['animation']);
  return <Animate {...animateProps} animation={animation} />;
}

Fade.propTypes = animatePropTypes;

Fade.defaultProps = {
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: 250,
};
