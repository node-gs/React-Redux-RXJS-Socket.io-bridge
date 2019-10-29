import { connect } from 'react-redux';
import {
  sortedWestCards,
} from '../selectors';
import Board from '../components/West';

const mapStateToProps = state => {
  const cards = sortedWestCards(state),
    player = state.manager.players.west,
    activePlayer = state.manager.active;
    
  return {
    player,
    cards,
    activePlayer
  };
}

export default connect(
  mapStateToProps,
)(Board);
