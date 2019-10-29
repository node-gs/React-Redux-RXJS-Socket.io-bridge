import React from 'react';
import styles from './manager.module.css';

const Manager = ({
  ew,
  ns,
  round,
  lead,
  trumps
}) => {
 
  return (
    <div className={styles.stats}> 
    <div className={styles.tricks}>
      <span> N/S: {ns}</span>
      <span> E/W: {ew}</span>
    </div>
      <span> Round: {round || 'Bidding'} </span>
      <span> Currently playing: {lead} </span>
      <span> Trump suit: {trumps} </span>
    </div>
  )
};

export default Manager;

