export const typedEntries: <T extends object>(
  obj: T,
) => [keyof T, T[keyof T]][] = Object.entries;
