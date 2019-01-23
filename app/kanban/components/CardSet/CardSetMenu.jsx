import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'lib/miracle';
import { Fade } from 'common/animated';

const contextTypes = {
  dropdown: PropTypes.object.isRequired,
};

export default function CardSetMenu(_, context) {
  const { dropdown: { isOpen, setContent } } = context;

  return (
    <Fade in={isOpen} timeout={250}>
      <Panel innerRef={setContent}>
        <h3>Menu</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Panel>
    </Fade>
  );
}

CardSetMenu.contextTypes = contextTypes;
