export const typedKeys: <T extends object>(obj: T) => (keyof T)[] = Object.keys;

export const fromLength = (len: number) =>
  Array.from({ length: len }, (_, i) => i);

export const prettify = (obj: any) => JSON.stringify(obj, null, 2);

/* TODO: Test big numbers for performance */
export const times = <T>(len: number, cb: (i: number) => T): void => {
  for (let i = 0; i < len; i++) {
    cb(i);
  }
};
