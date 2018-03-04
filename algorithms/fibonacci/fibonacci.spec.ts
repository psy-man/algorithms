import { fibonacci } from './fibonacci';


test('fibonacci', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(10)).toBe(55);
  expect(fibonacci(20)).toBe(6765);
  expect(fibonacci(50)).toBe(12586269025);
});

