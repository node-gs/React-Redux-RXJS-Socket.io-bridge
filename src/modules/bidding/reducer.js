import {
  END,
  PLACE_BID,
} from './actionTypes';
import createReducer from '../utils/createReducer';

const defaultState = {
  bids: [],
  dealer: 'tbd',
  enabled: true,
  active: 'tbd',
};

createReducer('bidding', defaultState, {
  RESPONSE_PLACE_BID(bidding, { payload: bid}) {
    return {
      ...bidding,
      bids: bidding.bids.concat([bid]),
    };
  },
  RESPONSE_GAME_START(bidding, payload) {
    return {
      ...bidding,
    };
  },
  RESPONSE_BIDDING_END(bidding) {
    return {
      ...bidding,
      enabled: false,
    };
  },
});
