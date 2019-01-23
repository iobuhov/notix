import styled, { css } from 'styled-components';
import { cond } from 'utils';

const dragging = css`
  cursor: grabbing;
`;

export const Box = styled.div`
  align-self: stretch;
  padding: 10px;
  display: flex;
  position: relative;
  ${cond('dragging', dragging)}
`;

export default Box;
