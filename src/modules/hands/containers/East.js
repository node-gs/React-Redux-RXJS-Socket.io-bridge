import { connect } from 'react-redux';
import {
  sortedEastCards,
} from '../selectors';
import Board from '../components/East';

const mapStateToProps = state => {
  const cards = sortedEastCards(state),
    player = state.manager.players.east,
    activePlayer = state.manager.active;

  return {
    player,
    cards,
    activePlayer
  };
};

export default connect(
  mapStateToProps,
)(Board);
