import React from 'react';
import Card from '../../../shared/cards/containers/Card'
import styles from './west.module.css';
import cn from 'classnames';

const West = ({
  children,
  player,
  activePlayer
}) => (
  <div className={styles.west}>
    <div className={styles.play}>
      {children}
    </div>
    <div className={styles.title}>
      <span className={(activePlayer === 'west') ? styles.active : ''}>
        West {player}
      </span>
    </div>
  </div>
);

const WestBoard = ({cards, player, activePlayer}) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeDown';
    }
    return (
      <Card
        key={`West:${index}`}
        rank={rank}
        suit={suit}
        className={className}
        hand={'west'}
      />
    );
  });
  return <West activePlayer={activePlayer} player={player}>{cardComponents}</West>;
}

export default WestBoard;
