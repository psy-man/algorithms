export const factorial = (num: number): number => {
  switch (num) {
    case 0:
    case 1:
      return 1;
    default:
      return num * factorial(num - 1);
  }
};
