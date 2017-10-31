import styled, { css } from 'styled-components';
import { bool } from 'prop-types';
import { cond } from 'utils';
import style from 'common/constants/style';

const silent = css`
  pointer-events: none;
`;

const dropping = css`
  transition: transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const dragged = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const dragging = css`
  z-index: ${style.zIndex.base};
`;

const withHandle = css`
  cursor: move;
  cursor: grab;
`;

const frontal = css`
  position: relative;
  z-index: 10;
`;

const dark = css`
  background: #181b1f;
`;

export const Container = styled.div`
  ${cond('frontal', frontal)}
  ${cond('dark', dark)}
  border-radius: 6px;
  box-sizing: border-box;
  flex: 0 0 280px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

Container.propTypes = { dark: bool, frontal: bool };

export const Wrapper = styled.div`
  ${cond('dragged', dragged)}
  ${cond('dragging', dragging)}
  ${cond('dropping', dropping)}
  ${cond('silent', silent)}
  ${cond('withHandle', withHandle)}
}`;

Wrapper.propTypes = {
  dragged: bool,
  dragging: bool,
  dropping: bool,
  silent: bool,
};

export default Container;
