import {
  shuffledCards,
} from '../../helpers';
import {
  ADD_NORTH_CARD,
  ADD_WEST_CARD,
  ADD_EAST_CARD,
  ADD_SOUTH_CARD,
  DEAL_CARDS,
  REQUEST_GAME_START
} from './actionTypes';

const splitRankAndSuit = (card) => {
  let rank = card.charAt(0);
  if (rank === '1') {
    rank = card.slice(0, 2);
  }
  return {
    rank,
    suit: card.slice(-1),
  };
}

export const requestGameStart = (game, player) => {
  let trumps = "♠";
  
  return [
    {
      type: REQUEST_GAME_START,
      payload: {
        trumps,
        game: game.sayc_card_string,
        player: player.email,
        bidding: false  
      }
    },
    {
      type: "REQUEST_SET_PLAYERS",
      payload: {
        north: "cpu",
        east: "cpu",
        west: "cpu",
        south: player.email
      }
    },
    {
      type: 'REQUEST_BIDDING_END'
    }
  ]
}

export const deal = ({ direction: startingDrection = 'east' } = {}) => {
  let direction = startingDrection;
  return  {
    type: DEAL_CARDS,
    payload: shuffledCards().reduce((memo, card) => {
      if (direction === 'north') {
        direction = 'east';
        memo.north.push(splitRankAndSuit(card));
      } else if (direction === 'east') {
        direction = 'south';
        memo.east.push(splitRankAndSuit(card));
      } else if (direction === 'south') {
        direction = 'west';
        memo.south.push(splitRankAndSuit(card));
      } else if (direction === 'west') {
        direction = 'north';
        memo.west.push(splitRankAndSuit(card));
      }
      return memo;
    }, {
      north: [],
      east: [],
      south: [],
      west: [],
    }),
  };
}

export const addNorthCard = (card) => {
  return {
    type: ADD_NORTH_CARD,
    payload: splitRankAndSuit(card),
  };
}

export const addWestCard = (card) => {
  return {
    type: ADD_WEST_CARD,
    payload: splitRankAndSuit(card),
  };
}

export const addSouthCard = (card) => {
  return {
    type: ADD_SOUTH_CARD,
    payload: splitRankAndSuit(card),
  };
}

export const addEastCard = (card) => {
  return {
    type: ADD_EAST_CARD,
    payload: splitRankAndSuit(card),
  };
}
