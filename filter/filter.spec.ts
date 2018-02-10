import test from 'ava';
import { filter } from './filter';

test(t => t.deepEqual(filter(
  ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
  word => word.length > 15
), []));

test(t => t.deepEqual(filter(
  ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
  word => word.length > 6
), ['exuberant', 'destruction', 'present']));

test(t => t.deepEqual(filter(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500],
  n => n > 7
), [8, 9, 10, 500]));
  