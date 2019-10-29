import 'rxjs/add/operator/mergeMap';
import createEpic from '../../modules/utils/createEpic';
import {
  REQUEST_GAME_END,
  REQUEST_ROUND_END,
  RESPONSE_PLAY_CARD,
  RESPONSE_BIDDING_END,
  RESPONSE_ROUND_END
} from './actionTypes';
import { sortBy } from 'lodash'
import { Observable } from 'rxjs'
import { DECK_COUNT, SUIT_ORDER } from '../../shared/constants'

export const roundEnd = (gameId) => {
  return {
    type: REQUEST_ROUND_END,
    payload: {
      gameId
    }
  }
}
export const gameEnd = (playBoard) => {
  return {
    type: REQUEST_GAME_END,
    payload: playBoard
  }
}

const cardToRank = (rank) => {
  if (rank === 'J') {
    return 11;
  } else if (rank === 'Q') {
    return 12;
  } else if (rank === 'K') {
    return 13;
  } else if (rank === 'A') {
    return 14;
  }
  return Number(rank);
}


const winningCardComparator = ({ north, east, south, west }) => {
  let cardArray = [north, east, south, west];
  let cardOrder = ['north', 'east', 'south', 'west'];
  let ownerArray = cardArray.map((card) => {
    return { ...card, owner: cardOrder.shift() }
  })
  let myArr = ownerArray.map(card => {
    return {
      ...card,
      rank: cardToRank(card.rank),
      suit: SUIT_ORDER.indexOf(card.suit)
    }
  })
  return sortBy(myArr, ['rank', 'suit'])[0].owner;
}

// TODO: Done really quickly, need tests and refactoring
createEpic((action$, store) => action$
  .ofType(RESPONSE_PLAY_CARD)
  .mergeMap(action => {
    let { manager: { cardsPlayed, round }, playBoard: { rounds } } = store.getState();

    let gameState = store.getState();
    let manager = gameState.manager;
    let hands = gameState.hands;
    let gameId = manager.gameId;
    // Is the round over?
    if (action.payload.roundOver) {
      let roundOver = (cardsPlayed === DECK_COUNT)
        ? [roundEnd(gameId), gameEnd()]
        : [roundEnd(gameId)]
      return Observable.of(...roundOver);
    }
    // If the round is not over and the player is a bot, play a card 
    else {
      if (manager.players[manager.active] === "cpu") {
        let card = "cpu",
        player = manager.active;
        
        return [{ type: "REQUEST_PLAY_CARD", payload: { card, player } }];
      }
      return []
    }
  })
  .delay(1000)
);

// TODO: Done really quickly, need tests and refactoring
createEpic((action$, store) =>
  action$.ofType(
    RESPONSE_BIDDING_END, 
    RESPONSE_ROUND_END,
  ).mergeMap(() => {
    let gameState = store.getState();
    let manager = gameState.manager;

    if (manager.players[manager.active] === "cpu") {
      let card = "cpu";
      let player = manager.active;
      
      return [{ type: "REQUEST_PLAY_CARD", payload: { card, player } }];
    }

    return [];
  })
  .delay(1000)
);
