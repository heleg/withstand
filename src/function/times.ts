/* TODO: Test big numbers for performance */
export const times = <T>(len: number, cb: (i: number) => T): void => {
  for (let i = 0; i < len; i++) {
    cb(i);
  }
};
