import createReducer from '../utils/createReducer';
import socket from '../../shared/sockets';

const defaultState = {
  active: 'tbd',
  cardsPlayed: 0,
  round: 0,
  trumps: 'tbd',
  score: {
    ew: 0,
    ns: 0
  },
  players: {
    north: '',
    east: '',
    south: '',
    west: '',
  },
  local_player: '',
  gameId: ''
};

createReducer("manager", defaultState, {
  RESPONSE_PLAY_CARD(state, { payload: { game } }) {
    return {
      ...state,
      active: game.manager.active,
      cardsPlayed: game.manager.cardsPlayed
    };
  }, 
  RESPONSE_ROUND_END(state, {payload}) {
    return {
      ...state,
      round: payload.manager.round,
      score: {...payload.manager.score},
      active: payload.manager.active
    };
  },
  RESPONSE_GAME_START(state, payload) {
    let gameId = payload.payload.socketId;
    return {
      ...state,
      gameId
    };
  },
  ERROR(state, payload) {
    return {
      ...state
    };
  },
  RESPONSE_SET_PLAYERS(state, { payload }) {
    let { north, east, south, west } = payload;
    return {
      ...state,
      players: {
        north,
        east,
        south,
        west
      },
      local: "south"
    };
  },
  RESPONSE_GAME_END(state, { payload }) {
    socket.disconnect();
    // TODO: Pack up game and send stats to persons account
    return state;
  },
  RESPONSE_BIDDING_END(state, { payload }) {
    return {
      ...state,
      enabled: true,
      round: 1,
      active: "north",
      trumps: "♣"
    };
  }
});
