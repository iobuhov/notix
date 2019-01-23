import styled from 'styled-components';
import ReactIScroll from 'react-iscroll';

export const Container = styled.div`
  display: flex;
  flex: 1 1;
  overflow: hidden;
  overflow-x: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ScrollBox = styled(ReactIScroll)`
  height:auto !important;
  flex-grow: 1;
  display: flex;
`;

export default Container;
