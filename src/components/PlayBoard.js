import React from 'react';
import cn from 'classnames';
import styles from './playboard.module.css';

import {
  EastBoard,
  NorthBoard,
  SouthBoard,
  WestBoard,
} from '../modules/hands'
import {
  Board as BiddingBoard,
} from '../modules/bidding';
import {
  Board as PlayingBoard,
} from '../modules/play';

import { Manager } from '../modules/manager';

const PlayBoard = () => (
  <div className={cn(styles.container)}>
    <Manager/>
    <div className={cn(styles.board)}>
      <WestBoard />
      <NorthBoard />
      <BiddingBoard />
      <PlayingBoard />
      <EastBoard />
      <SouthBoard />
    </div>
  </div>
);
export default PlayBoard;