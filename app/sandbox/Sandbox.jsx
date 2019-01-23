import Dropdown from 'common/dropdown';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line
import Fade from 'common/animated/fade/Fade.js';
import { Panel, Button } from 'lib/miracle';

const duration = 250;

const contextTypes = {
  dropdown: PropTypes.object.isRequired,
};

function SandboxMenu(_, context) {
  const { dropdown: { isOpen, setContent } } = context;

  return (
    <Fade in={isOpen} timeout={duration}>
      <Panel innerRef={setContent}>
        PANEL
      </Panel>
    </Fade>
  );
}

SandboxMenu.contextTypes = contextTypes;

export default function SandBox() {
  return (
    <Dropdown>
      <Button style={{ float: 'right' }}>Toggle</Button>
      <SandboxMenu />
    </Dropdown>
  );
}
