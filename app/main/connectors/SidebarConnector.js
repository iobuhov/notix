import { Sidebar } from 'main/components/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleSidebar } from 'main/actions';

const mapState = state => ({
  isOpen: state.getIn(['sidebar', 'open']),
});

const mapDispatch = dispatch => ({
  onToggle: bindActionCreators(toggleSidebar, dispatch),
});

export default connect(mapState, mapDispatch)(Sidebar);
