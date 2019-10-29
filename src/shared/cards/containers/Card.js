import { connect } from 'react-redux';
import {
  playCard,
} from '../actions';
import Card from '../components/Card';

const mapStateToProps = state => ({
  active: state.manager.active,
  biddingOver: !state.bidding.enabled,
  localPlayer: state.manager.local,
  gameId: state.manager.gameId
})

const mapDispatchToProps = dispatch => ({
  playCard: ((card, active, gameId) => dispatch(playCard(card, active, gameId)))
})

export default connect(
  mapStateToProps, //TODO state for cards from selectors
  mapDispatchToProps,
)(Card);
