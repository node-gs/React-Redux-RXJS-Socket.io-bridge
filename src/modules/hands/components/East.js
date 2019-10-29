import React from 'react';
import cn from 'classnames';
import Card from '../../../shared/cards/containers/Card'
import styles from './east.module.css';

const East = ({ children, player, activePlayer }) => (
  <div className={styles.east}>
    <div className={cn(styles.boardTitle, styles.column)}>
      <span className={(activePlayer === 'east') ? styles.active : ''}>
        East {player}
      </span>
    </div>
    <div className={cn(styles.play, styles.column)}>{children}</div>
  </div>
);

const EastBoard = ({ cards, player, activePlayer }) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = "";
    if (index !== 0) {
      className = "placeDown";
    }
    return (
      <Card
        key={`East:${index}`}
        rank={rank}
        suit={suit}
        className={className}
        hand={"east"}
      />
    );
  });
  return <East activePlayer={activePlayer} player={player}>{cardComponents}</East>;
};

export default EastBoard;
