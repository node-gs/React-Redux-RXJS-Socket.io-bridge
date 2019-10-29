import React, { Fragment } from 'react';
import cn from 'classnames';
import {
  suitToColor,
} from '../../../helpers'
import styles from './card.module.css';

import {
  noop,
} from 'lodash';

const Card = ({
  rank,
  suit,
  className,
  playCard,
  hand,
  active,
  biddingOver,
  localPlayer,
  gameId
}) => {
  return (
    <Fragment>
      {(localPlayer === hand || hand === "playBoard")
        ? (
          <div onClick={(
            active === localPlayer && 
            biddingOver && 
            hand !== "playBoard" && 
            localPlayer === hand &&
            active === hand
            ) ? () => {
              playCard({rank, suit}, active, gameId)
            } : noop} className={cn(styles.card, styles[suitToColor(suit)], styles[className])}>
            <div className={cn(styles.cardLeft)}>
              <div className={cn(styles.rank)}>{rank}</div>
              <div className={cn(styles.largeSuit)}>{suit}</div>
            </div>
            <div className={cn(styles.cardRight)}>
              <div className={cn(styles.smallSuit)}>{suit}</div>
            </div>
          </div>
        )
        : (
          <div className={cn(styles.card, styles.cardBack, styles[suitToColor(suit)], styles[className])}>
            <div className={cn(styles.cardLeft)}>
              <div className={cn(styles.rank)}></div>
              <div className={cn(styles.largeSuit)}></div>
            </div>
            <div className={cn(styles.cardRight)}>
              <div className={cn(styles.smallSuit)}></div>
            </div>
          </div>
        )}
    </Fragment>
  )};

export default Card;
