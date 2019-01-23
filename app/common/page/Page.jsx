import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Container,
  Content,
  Header,
} from './Page-styled';

export default class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    header: PropTypes.node.isRequired,
  }

  render() {
    const { header, children } = this.props;

    return (
      <Container>
        <Header>{header}</Header>
        <Content role="main" id="content">{children}</Content>
      </Container>
    );
  }
}
