
import { findIndex }from 'lodash';
import {
  PLAY_CARD
} from './actionTypes';

import createReducer from '../../modules/utils/createReducer'
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
  }
  // [PLAY_CARD](hands, { payload: { rank, suit }, hand}) {
  //   let index = findIndex(hands[hand], {rank, suit})
  //   return {
  //     ...hands,
  //     [hand]: [
  //     ...hands[hand].slice(0, index),
  //     ...hands[hand].slice(index + 1)
  //     ]
  //   };
  // }
});
