import styled from 'styled-components';

export const Box = styled.div`
  border-radius: 4px;
  background-color: #6b7379;
  margin-bottom: .625rem;
  &:last-of-type {
    margin-bottom: 0
  }
`;

export const Heading = styled.div`
  padding: .75rem .625rem;
  font-size: 1.5em;
`;

export const TextArea = styled.textarea`
  padding: .625rem;
  padding-top: 0;
  width: 100%;
  border-radius: .25rem;
  display: block;
  box-sizing: border-box;
  background: inherit;
  border-style: none;
  font-size: inherit;
  color: inherit;
  outline: none;
  font-weight: 300;
  letter-spacing: 0.07em;
  font-family: 'Helvetica Neue';
`;

export default Box;
