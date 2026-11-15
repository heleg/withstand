export const typedValues: <T extends object>(obj: T) => T[keyof T][] =
  Object.values;
