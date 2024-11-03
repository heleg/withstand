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

// Draft by chatGPT
// TODO: review
function mapValues<T extends Record<string, any>, U>(
  obj: T,
  callback: (value: T[keyof T], key: keyof T) => U,
): Record<keyof T, U> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      callback(value, key as keyof T),
    ]),
  ) as Record<keyof T, U>;
}
