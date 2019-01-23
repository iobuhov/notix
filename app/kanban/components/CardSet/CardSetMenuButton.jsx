import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  background-color: transparent;
  border-style: none;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  color: inherit;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #41474e;
  }
  .icon {
    display: block;
  }
`;

export default function CardSetMenuButton(props) {
  return (
    <MenuButton {...props}>
      <svg className="icon">
        <use xlinkHref="#icon-dots-three-vertical" />
      </svg>
    </MenuButton>
  );
}
