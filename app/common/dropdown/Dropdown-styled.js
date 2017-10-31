import styled, { css } from 'styled-components';
import { cond, prop } from 'utils';
import { Panel } from 'lib/miracle';

const offset = css`
  top: ${prop('top', 0)}px;
  left: ${prop('left', 0)}px;
`;

const absolute = css`
  position: absolute;
  ${offset}
`;

const relative = css`
  position: relative;
  ${offset}
`;

export const Container = styled.div``;

export const MenuBox = styled.div`
  ${cond('absolute', absolute)}
  ${cond('relative', relative)}
`;

export const Menu = Panel.extend`
  min-height: 0;
  & ul { margin: 0; }
`;

export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  color: inherit;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #41474e;
  }
  .icon {
    display: block;
  }
`;
