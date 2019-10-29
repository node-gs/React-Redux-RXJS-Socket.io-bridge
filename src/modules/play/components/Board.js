import React from 'react';
import cn from 'classnames';
import styles from './board.module.css';
import Card from '../../../shared/cards/containers/Card'

// TODO: Destructure currentBoard north, east, south, west
const Board = ({ enabled, currentBoard }) => (
  <div
    className={cn({
      [styles.boardPlay]: true,
      [styles.disabled]: !enabled
    })}
  >
    <div className={cn(styles.north)}>
      {currentBoard && currentBoard.north && currentBoard.north.suit && (
        <Card
          hand={"playBoard"}
          rank={currentBoard.north.rank}
          suit={currentBoard.north.suit}
        />
      )}
    </div>

    <div className={cn(styles.eastWestContainer)}>
      <div className={cn(styles.west)}>
        {currentBoard && currentBoard.west && currentBoard.west.suit && (
          <Card
            hand={"playBoard"}
            rank={currentBoard.west.rank}
            suit={currentBoard.west.suit}
          />
        )}
      </div>
      <div className={cn(styles.east)}>
        {currentBoard && currentBoard.east && currentBoard.east.suit && (
          <Card
            hand={"playBoard"}
            rank={currentBoard.east.rank}
            suit={currentBoard.east.suit}
          />
        )}
      </div>
    </div>

    <div className={cn(styles.south)}>
      {currentBoard && currentBoard.south && currentBoard.south.suit && (
        <Card
          hand={"playBoard"}
          rank={currentBoard.south.rank}
          suit={currentBoard.south.suit}
        />
      )}
    </div>
  </div>
);

export default Board;

