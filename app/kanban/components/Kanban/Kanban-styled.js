import styled from 'styled-components';
import ReactIScroll from 'react-iscroll';

export const Container = styled.div`
  flex: 1 1;
  width: 100%;
  display: flex;
  padding: 10px 0;
`;

export const ScrollBox = styled(ReactIScroll)`
  height:auto !important;
  flex-grow: 1;
  display: flex;
`;

export const Col = styled.div`
  margin: 0 10px;
  box-sizing: border-box;
  flex: 0 0 280px;
`;

export const Board = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: ${p => p.size * 320}px;
`;

Board.defaultProps = {
  size: 1,
};

export default Container;
