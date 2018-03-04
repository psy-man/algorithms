import { factorial } from './factorial';


it('factorial', () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(10)).toBe(3628800);
  expect(factorial(20)).toBe(2432902008176640000);
});

