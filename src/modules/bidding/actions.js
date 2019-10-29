import 'rxjs/add/operator/mergeMap';
import createEpic from '../utils/createEpic';
import {
  bids,
  lastTrickBid,
} from './selectors';
import {
  REQUEST_BIDDING_END,
} from './actionTypes';

export function placeBid(bid) {
  return {
    type: "REQUEST_PLACE_BID",
    payload: bid,
  };
}

export function end() {
  return {
    type: REQUEST_BIDDING_END
  };
}

createEpic((action$, store) => action$
  .ofType("RESPONSE_PLACE_BID")
  .mergeMap(() => {
    const _bids = bids(store.getState());
    if (_bids.length < 4) {
      return [];
    }
    if (_bids.length === 4 && _bids.filter(bid => bid === 'Pass').length === 4) {
      return [end()];
    }
    const _lastTrickBid = lastTrickBid(store.getState());
    if (_lastTrickBid && _bids.slice(-3).filter(bid => bid === 'Pass').length === 3) {
      return [end()];
    }
    if (_lastTrickBid === '7NT') {
      return [end()];
    }
    return [];
  }),
);
