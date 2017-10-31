import styled, { css } from 'styled-components';
import { cond } from 'utils';

const dragging = css`
  cursor: grabbing;
`;

export const Box = styled.div`
  padding: 10px;
  display: flex;
  min-width: ${p => p.size * 320}px;
  position: relative;
  ${cond('dragging', dragging)}
`;

export default Box;
