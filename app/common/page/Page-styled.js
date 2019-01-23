import styled from 'styled-components';
import { Header as MHeader } from 'lib/miracle';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.main`
  display: flex;
  flex: 1 1;
  position: relative;
`;

export const Layout = styled.div`
  display: flex;
  height: 100%;
`;

export const Header = styled(MHeader)`
  flex: 0 0;
`;
