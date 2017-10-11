import styled from 'styled-components';
import ReactIScroll from 'react-iscroll';

export const Container = styled.div`
  flex: 1 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

export const ScrollBox = styled(ReactIScroll)`
  height:auto !important;
  flex-grow: 1;
  display: flex;
`;

export default Container;
