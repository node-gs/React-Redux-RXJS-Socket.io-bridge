import React from 'react';
import Card from '../../../shared/cards/containers/Card'
import styles from './north.module.css';
import cn from 'classnames';

const North = ({children, player, activePlayer}) => (
  <div className={styles.north}>
    <div className={styles.play}>
      {children}
    </div>
    <div className={styles.title}>
      <span className={(activePlayer === 'north') ? styles.active : ''}>
        North {player}
      </span>
    </div>
  </div>
);

const NorthBoard = ({ cards, player, activePlayer }) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeRight';
    }
    return (<Card
      key={`north:${index}`}
      rank={rank}
      suit={suit}
      className={className}
      hand={'north'}
    />);
  });
  return <North activePlayer={activePlayer} player={player}>{cardComponents}</North>;
}

export default NorthBoard;
