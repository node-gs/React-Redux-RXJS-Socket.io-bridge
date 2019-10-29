import { connect } from 'react-redux';
import {
  selectors as biddingSelectors,
} from '../'
import Board from '../components/Board';

const mapStateToProps = (state) => ({
    enabled: !biddingSelectors.enabled(state),
    currentBoard: state.playBoard.rounds[state.manager.round || 1],
    currentRound: state.manager.round
});

export default connect(mapStateToProps)(Board);
