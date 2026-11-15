export const countWhen = (array: number[], condition: (x: number) => boolean) =>
  array.reduce((acc, curr) => (condition(curr) ? acc + 1 : acc), 0);
