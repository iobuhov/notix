// import style from 'consts/style';
import styled from 'styled-components';
import { prop } from 'utils';

const duration = 500;

export const Content = styled.div`
  flex: 1 0;
`;

export const Layout = styled.div`
  display: flex;
  height: 100%;
`;

export const Nav = styled.div`
  flex: 0 0;
  flex-basis: ${ prop('width', 300) }px;
  height: 100%;
  margin-left: ${ prop('marginLeft', 0) }px;
  transition: margin-left ${duration}ms ease;
`;
