// TODO: Add tag @tags fp

export const oneOf =
  <T>(arr: T[]) =>
  (value: T) =>
    arr.includes(value);
