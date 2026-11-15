export const sumWhen = (array: number[], condition: (x: number) => boolean) =>
  array.reduce((acc, curr) => (condition(curr) ? acc + curr : acc), 0);
