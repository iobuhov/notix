import styled, { css } from 'styled-components'
// import { cond } from 'utils';

const prefixes = ['xs', 'sm', 'md', 'lg'];

const has = (keys, value, defval) =>
  props => (keys.some(key => props.hasOwnProperty(key)) ? value : defval);

const calcWidth = col => `${(col / 12) * 100}%`;

const width = props => css`
  flex-basis: ${calcWidth(props.xs)};
  max-width: ${calcWidth(props.xs)};
`
export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;

  @media(min-width: 1200px) {
    width: 1200px;
  }
`;

export const ContainerFluid = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  padding: 0 15px;
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -15px;
`

export const Col = styled.div`
  box-sizing: border-box;
  min-height: 50px;
  padding: 0 15px;
  flex-grow: ${has(prefixes, '1', '0')};
  flex-basis: 100%;
  max-width: none;
  flex-shrink: 0;
  ${props => width(props)}
`
