import { connect } from 'react-redux';
import {
  sortedSouthCards,
} from '../selectors';
import SouthBoard from '../components/South';

const mapStateToProps = state => {
  const cards = sortedSouthCards(state),
    player = state.manager.players.south,
    activePlayer = state.manager.active;
    
  return {
    player,
    cards,
    activePlayer
  };
};

export default connect(
  mapStateToProps,
)(SouthBoard);
