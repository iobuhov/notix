import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { swapCardSet } from 'kanban/actions/boardActions';
import Board from 'kanban/components/Board';

function mapState(state) {
  return { items: state.getIn(['board', 'content']) };
}

function mapDispatch(dispatch) {
  return {
    onCardSetOverlap: bindActionCreators(swapCardSet, dispatch),
  };
}

export default connect(mapState, mapDispatch)(Board);
