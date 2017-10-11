import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  /* background-color: #42474d; */
  background-color: #71777e;
  color: #eee;
  border-radius: 4px;
  border: 1px solid;
  border-color: transparent;
  padding: 0.3em 0.7em;
  &:hover {
    background: #5a6168;
    color: #b5b5b5;
  }
`;

export default Button;
