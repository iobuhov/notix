import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 300px;
  height: 100%;
  /* background-color: #292d32; */
  /* background-color: #24272b; */
  background-color: #1f2428;
  /* background-color: #272b2f; */
  border-right: 1px solid #171D1B;
  flex: 0 1 300px;
  @media (min-width: 1200px) {
    display: block;
  }
`;

export const Content = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
`;

export const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
`;
