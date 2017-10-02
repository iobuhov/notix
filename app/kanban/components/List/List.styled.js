import styled from 'styled-components';
import {
  Panel, PanelHeading, PanelBody,
  Button,
  Input as BaseInput,
} from 'lib';

export const Container = Panel.extend`
  min-height: 20px;
`;

export const Heading = PanelHeading.extend`
  border-style: none;
  padding: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = PanelBody.extend`
  border-top: 1px solid #3b3f45;
  line-height: 1.8em;
`;

export const Input = BaseInput.extend`
  box-sizing: border-box;
  background: #5a6168;
  width: 100%;
`;

export const FieldButton = Button.extend`
  background: #71777e;
`;

export const Field = styled.div`
  line-height: 1.4;
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 0.6em;
  border-color: #45494c;
  *:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  *:not(:first-child) {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  button, input {
    color: #e8e8e8;
    border-color: inherit;
  }
`;
