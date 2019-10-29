import React from 'react';
import cn from 'classnames';
import styles from './logentry.module.css';

const LogEntry = ({
  direction,
  bid,
}) => (
  <div className={cn(styles.biddingLogEntry)}>
    {bid}
  </div>
);

export default LogEntry;
