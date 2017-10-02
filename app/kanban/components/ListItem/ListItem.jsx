import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from './ListItem-styled';

export default class ListItem extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }
  render() {
    const { value } = this.props;
    return (
      <Box>{value}</Box>
    );
  }
}
