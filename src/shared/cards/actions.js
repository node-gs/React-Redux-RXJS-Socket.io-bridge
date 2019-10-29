
export const playCard = (card, player, gameId) => {
  return {
    type: 'REQUEST_PLAY_CARD',
    payload: { card, player, gameId }
  }
}