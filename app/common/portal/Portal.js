import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { isBrowser } from 'lib/reco/utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  target: isBrowser ? PropTypes.instanceOf(Element) : PropTypes.any,
};

const defaultProps = {
  target: isBrowser ? document.getElementById('modals') : null,
};

export default function Portal({ children, target }) {
  return createPortal(children, target);
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;
