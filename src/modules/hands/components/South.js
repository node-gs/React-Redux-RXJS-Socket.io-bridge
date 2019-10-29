import React from 'react';
import Card from '../../../shared/cards/containers/Card'
import styles from './south.module.css';
import cn from 'classnames';

const South = ({ children, player, activePlayer}) => {

  return (
    <div className={styles.south}>
      <div className={styles.title}>
        <span className={(activePlayer === 'south') ? styles.active: ''}>
          South {player}
        </span>
      </div>
      <div className={styles.play}>
        {children}
      </div>
    </div>
  )
};


const SouthBoard = ({ cards, player, activePlayer }) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = "";
    if (index !== 0) {
      className = "placeRight";
    }
    return (
      <Card
        key={`south:${index}`}
        rank={rank}
        suit={suit}
        className={className}
        hand={"south"}
      />
    );
  });
  return <South activePlayer={activePlayer} player={player}>{cardComponents}</South>;
};

export default SouthBoard;
