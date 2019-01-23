import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isBoolean } from 'typechecker';
import { isBrowser } from 'lib/reco/utils';
import { isEscape, safeInvoke } from 'helpers';
import Ref from 'lib/reco/ref/Ref';
// import { pick } from 'ramda';
import Popover from 'common/popover/Popover';

// const childContextProps = pick(['isOpen']);

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * Whether the dropdown is visible.
     * @default false
     */
    // isOpen: PropTypes.bool,
    /**
     * Callback invoked when trigger is clicked.
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]),
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    isOpen: undefined,
    onToggle: undefined,
  }

  static childContextTypes = {
    dropdown: PropTypes.object,
  }

  state = {
    open: false,
    controlled: isBoolean(this.props.isOpen),
  }

  getChildContext() {
    return {
      dropdown: {
        isOpen: this.getOpen(),
        setContent: this.setContent,
      },
    };
  }

  componentDidMount() {
    const { isOpen } = this.props;
    if (isBoolean(isOpen) && isOpen && isBrowser) {
      this.addListeners();
    }
  }

  componentWillUnmount() {
    if (isBrowser) {
      this.removeListeners();
    }
  }

  /* componentWillUpdate(nextProps, nextState) {
   *   if (isBrowser) {
   *     if (nextProps.isOpen || nextState.open) {
   *       this.addListeners();
   *     } else {
   *       this.removeListeners();
   *     }
   *   }
   * }
   */

  setContent = (node) => {
    this.content = node;
  }

  getOpen() {
    if (this.state.controlled) {
      return this.props.isOpen;
    }
    return this.state.open;
  }

  handleClick = (e) => {
    this.toggle(e);
  }

  handleDocumentMouseDown = (e) => {
    const open = this.getOpen();
    const eventFromTarget = this.trigger.contains(e.target);
    const eventFromContent = this.content.contains(e.target);
    const isExternalEvent = !eventFromTarget && !eventFromContent;

    if (open && isExternalEvent) {
      this.toggle(e);
    }

    e.stopPropagation();
  }

  handleKeyUp = (e) => {
    if (isEscape(e)) {
      this.close();
    }
  }

  handleTriggerRef = (node) => {
    this.trigger = this.trigger || node;
  }

  addListeners() {
    document.addEventListener('mousedown', this.handleDocumentMouseDown, true);
  }

  removeListeners() {
    document.removeEventListener('mousedown', this.handleDocumentMouseDown, true);
  }

  toggle = (e) => {
    const { controlled } = this.state;
    const { onToggle } = this.props;
    const open = this.getOpen();

    if (open) {
      this.removeListeners();
    } else if (!open) {
      this.addListeners();
    }

    safeInvoke(onToggle, [e, open]);

    if (!controlled) this.setState({ open: !open });
  }

  renderTrigger(trigger) {
    return React.cloneElement(React.Children.only(trigger), {
      onClick: this.handleClick,
    });
  }

  render() {
    const { children } = this.props;

    const [trigger, content] = React.Children.toArray(children);
    return (
      <Popover placement="bottom-start">
        <Ref innerRef={this.handleTriggerRef}>
          {this.renderTrigger(trigger)}
        </Ref>
        {content}
      </Popover>
    );
  }
}
