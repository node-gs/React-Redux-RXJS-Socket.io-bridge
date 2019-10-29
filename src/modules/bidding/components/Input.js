import React from 'react';
import cn from 'classnames';
import {
  includes,
  noop,
} from 'lodash';
import styles from './input.module.css';
import {
  possibleBids,
} from '../../../helpers';

const Input = ({
  placeBid,
  enabledBids,
}) => (
  <div className={cn(styles.boardInput)}>
    {possibleBids.map((bid, index) => (
      <div
        key={bid}
        className={cn({
          [styles.boardBidInput]: true,
          [styles.newRow]: index === 3,
          [styles.disabled]: !includes(enabledBids, bid),
        })}
        onClick={includes(enabledBids, bid) ? () => placeBid(bid) : noop}
      >
        {bid}
      </div>
    ))}
  </div>
);

export default Input;
