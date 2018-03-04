import { permute } from './permute';


it('permute', () => {
  expect(permute('')).toEqual([]);
  expect(permute('ab')).toEqual(['ab', 'ba']);
  expect(permute('xyz')).toEqual(['xyz', 'yxz', 'zxy', 'xzy', 'yzx', 'zyx']);
});

