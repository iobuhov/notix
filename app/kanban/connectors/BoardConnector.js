import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  swapCardSet,
  dragStart,
  dragStop,
  /* toggleDragging, */
} from 'kanban/actions/boardActions';
import Board from 'kanban/components/Board';

function mapState(state) {
  return {
    dragMode: state.getIn(['board', 'dragging']),
    holding: state.getIn(['board', 'holding']),
    items: state.getIn(['board', 'content']),
  };
}

function mapDispatch(dispatch) {
  return {
    onCardSetOverlap: bindActionCreators(swapCardSet, dispatch),
    onDragStart: bindActionCreators(dragStart, dispatch),
    onDragStop: bindActionCreators(dragStop, dispatch),
  };
}

export default connect(mapState, mapDispatch)(Board);
