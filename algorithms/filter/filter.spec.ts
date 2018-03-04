import { filter } from './filter';


test('filter', () => {
  expect(filter(
    ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
    word => word.length > 15
  )).toEqual([]);

  expect(filter(
    ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
    word => word.length > 6
  )).toEqual(['exuberant', 'destruction', 'present']);

  expect(filter(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500],
    n => n > 7
  )).toEqual([8, 9, 10, 500]);
});
