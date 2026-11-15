export const typedKeys: <T extends object>(obj: T) => (keyof T)[] = Object.keys;
