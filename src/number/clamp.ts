// TODO: How should NaN be handled in this case?
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
