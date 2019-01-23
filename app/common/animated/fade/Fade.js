import BaseAnimation from 'common/base-animation';
import PropTypes from 'prop-types';
import React from 'react';
import Transition from 'common/transition';
import style from 'consts/style';
import styled from 'styled-components';
import { FADE_IN, FADE_OUT } from 'consts/animations';
import {
  transitionHandler,
  propsSelector,
  statusToProps,
} from 'helpers';

const transitionProps = propsSelector(Transition);

const duration = n => `${n}ms`;

const animations = {
  entering: FADE_IN,
  exiting: FADE_OUT,
  default: 'none',
};

const FadeInOut = styled(BaseAnimation)`
  animation-name: ${transitionHandler(animations)}
`;

const defaultProps = {
  children: null,
  mountOnEnter: true,
  timeout: style.animation.duration,
  unmountOnExit: true,
};

const propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function Fade({ children, ...props }) {
  const child = statusToProps(React.createElement(FadeInOut, {
    duration: duration(props.timeout),
  }, children));

  return React.createElement(
    Transition,
    transitionProps(props),
    child
  );
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
