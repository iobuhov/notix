import styled from 'styled-components';
import {
  Panel,
  PanelHeading,
  PanelBody,
  Input as MiracleInput,
  Button,
} from 'lib/miracle';

export const Container = Panel.extend`
  border-radius: 6px;
  min-height: 0;
`;

export const Heading = PanelHeading.extend`
  background-color: #4a5058;
  border-style: none;
  padding: 0.3em;
  padding-left: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = PanelBody.extend`
  padding: 0;
  overflow: hidden;
  /* border-top: 1px solid #3b3f54; */
  line-height: 1.8em;
`;

export const Input = MiracleInput.extend`
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
  & ~ * {
    margin-top: 0.6em;
  }
  button, input {
    color: #e8e8e8;
    border-color: inherit;
  }
`;
