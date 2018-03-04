import { groupBy } from './groupBy';


it('groupBy', () => {
  expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({3: ['one', 'two'], 5: ['three']});
  expect(groupBy([1.3, 2.1, 2.4], Math.floor)).toEqual({1: [1.3], 2: [2.1, 2.4]});
  expect(groupBy([{years: 30, name: 'John'}, {years: 26, name: 'Eugene'}, {years: 30, name: 'Chris'}], 'years'))
    .toEqual({26: [{years: 26, name: 'Eugene'}], 30: [{years: 30, name: 'John'}, {years: 30, name: 'Chris'}]});
});
