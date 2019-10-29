import createReducer from '../utils/createReducer';

const defaultState = {
  enabled: false,
  rounds: {
    "1": {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "2":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "3":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "4":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "5":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "6":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "7":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "8":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "9":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "10":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "11":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "12":  {
      north: {},
      east: {},
      south: {},
      west: {}
    },
    "13":  {
      north: {},
      east: {},
      south: {},
      west: {}
    }
  }
};

createReducer('playBoard', defaultState, {
  RESPONSE_PLAY_CARD(play, { payload: { game } }) {
    return {
      ...play,
      rounds: game.playBoard.rounds
    }
  },
  RESPONSE_ROUND_END(play, payload) {
    
    let round = payload.payload.manager.round;
    return {
      ...play,
      round
    }
  },
  RESPONSE_BIDDING_END(play) {
    return {
      ...play,
      enabled: true,
    };
  },
});
