import { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import fadeOut from 'react-animations/lib/fade-out';

const animation = spec => keyframes`${spec}`;

export const FADE_IN = animation(fadeIn);
export const FADE_OUT = animation(fadeOut);
