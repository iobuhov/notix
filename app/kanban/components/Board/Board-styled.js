import styled from 'styled-components';
import { cond } from 'utils';

export const Col = styled.div`
  margin: 0 10px;
  box-sizing: border-box;
  flex: 0 0 280px;
  border-radius: 6px;
  z-index: 2;
  ${cond('shadow', 'background: #181b1f; z-index: -15;')}
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Box = styled.div`
  padding: 10px;
  display: flex;
  min-width: ${p => p.size * 320}px;
  position: relative;
`;

export default Box;
