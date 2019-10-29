import {
  DEAL_CARDS,
  RESPONSE_PLAY_CARD
} from './actionTypes';
import createReducer from '../utils/createReducer';

const defaultState = {
  north: [],
  east: [],
  south: [],
  west: [],
};

createReducer('hands', defaultState, {
  RESPONSE_PLAY_CARD(hands, { payload: { game }}) {
    return {
      ...game.hands
    };
  },
  RESPONSE_GAME_START(hands, payload) {
    return {
      ...payload.payload.hands,
    };
  },
  [DEAL_CARDS](hands, { payload: cards }) {
    return {
      ...hands,
      ...cards,
    };
  }
});

