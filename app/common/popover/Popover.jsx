import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Manager, Target, Popper } from 'react-popper';
import { omit } from 'ramda';
import { propsSelector } from 'helpers';
import Ref from 'lib/reco/ref/Ref';
import Portal from 'common/portal';

const popperProps = propsSelector(Popper);

export default class Popover extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
    inline: PropTypes.bool,
  }

  static defaultProps = {
    inline: false,
  }

  getChildren() {
    const { children } = this.props;
    const [target, content] = React.Children.toArray(children);

    return { target, content };
  }

  renderPopper(content) {
    const restProps = omit(['children'], this.props);

    return (
      <Popper {...popperProps(restProps)}>
        {content}
      </Popper>
    );
  }

  render() {
    const { inline } = this.props;
    const { target, content } = this.getChildren();

    return (
      <Manager tag={false}>
        <If condition={React.isValidElement(target)}>
          <Target component={Ref}>
            {target}
          </Target>
        </If>
        <Choose>
          <When condition={inline}>
            {this.renderPopper(content)}
          </When>
          <Otherwise>
            <Portal>
              {this.renderPopper(content)}
            </Portal>
          </Otherwise>
        </Choose>
      </Manager>
    );
  }
}
