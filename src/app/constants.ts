import { Level } from './interfaces/level.interface';

const level1: Level = {
  time: 1500,
  words: ['gun', 'like', 'skip', 'scan', 'herb', 'heir', 'can', 'west'],
};

const level2: Level = {
  time: 1000,
  words: [
    'nuance',
    'breakfast',
    'habitat',
    'economy',
    'particle',
    'feminist',
    'carriage',
    'guerrilla',
    'humanity',
    'poison',
  ],
};

const level3: Level = {
  time: 900,
  words: [
    'undress registration',
    'deserve passion',
    'prince elaborate',
    'sympathetic leaflet',
    'casualty horror',
    'landscape moment',
    'custody discover',
    'kidney ignorance',
    'transition passage',
    'colony dedicate',
  ],
};

export const GAME_CONSTANTS: { lives: number; levels: Level[] } = {
  lives: 3,
  levels: [level1, level2, level3],
};
