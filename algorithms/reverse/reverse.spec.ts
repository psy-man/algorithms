import { reverse } from './reverse';


it('reverse', () => {
  expect(reverse('')).toBe('');
  expect(reverse('abcdef')).toBe('fedcba');
});

