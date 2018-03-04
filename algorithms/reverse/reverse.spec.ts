import { reverse } from './reverse';


test('reverse', () => {
  expect(reverse('')).toBe('');
  expect(reverse('abcdef')).toBe('fedcba');
});

