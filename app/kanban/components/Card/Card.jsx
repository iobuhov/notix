import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, TextArea } from './Card-styled';

export default class Card extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Box>
        <Heading>{this.props.value}</Heading>
        <TextArea defaultValue="Body goes hear..." />
      </Box>
    );
  }
}
