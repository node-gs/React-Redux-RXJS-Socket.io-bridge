import { connect } from 'react-redux';
import {
  sortedNorthCards,
} from '../selectors';
import NorthBoard from '../components/North';

const mapStateToProps = state => {
  const cards = sortedNorthCards(state),
    player = state.manager.players.north,
    activePlayer = state.manager.active;
    
  return {
    player,
    cards,
    activePlayer
  };
};

export default connect(
  mapStateToProps,
)(NorthBoard);
