import { createSelector } from 'reselect';
import {
  cardComparator,
} from '../../helpers';

export const root = state => state.hands;

export const northCards = createSelector(
  root,
  hands => hands.north,
);

export const sortedNorthCards = createSelector(
  northCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const westCards = createSelector(
  root,
  hands => hands.west,
);

export const sortedWestCards = createSelector(
  westCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const eastCards = createSelector(
  root,
  hands => hands.east,
);

export const sortedEastCards = createSelector(
  eastCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const southCards = createSelector(
  root,
  hands => hands.south,
);

export const sortedSouthCards = createSelector(
  southCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);
