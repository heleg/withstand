export const typedKeys: <T extends object>(obj: T) => (keyof T)[] = Object.keys;

export const typedValues: <T extends object>(obj: T) => T[keyof T][] =
  Object.values;

export const typedEntries: <T extends object>(
  obj: T,
) => [keyof T, T[keyof T]][] = Object.entries;

export const fromLength = (len: number) =>
  Array.from({ length: len }, (_, i) => i);

export const prettify = (obj: any) => JSON.stringify(obj, null, 2);

/* TODO: Test big numbers for performance */
export const times = <T>(len: number, cb: (i: number) => T): void => {
  for (let i = 0; i < len; i++) {
    cb(i);
  }
};

// TODO: How should NaN be handled in this case?
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

// Draft by chatGPT
// TODO: review
// TODO: test
// function mapValues<T extends Record<string, any>, U>(
//   obj: T,
//   callback: (value: T[keyof T], key: keyof T) => U,
// ): Record<keyof T, U> {
//   return Object.fromEntries(
//     Object.entries(obj).map(([key, value]) => [
//       key,
//       callback(value, key as keyof T),
//     ]),
//   ) as Record<keyof T, U>;
// }

// TODO: review, maybe useful
// const truncateWithEllipsis = (value: string) => {
//   if (value.length > 20) return `${value.slice(0, 20)}…`;
//
//   return value;
// };

// TODO: Add tag @tags fp
export const oneOf = <T>(arr: T[]) => arr.includes.bind(arr);

// TODO: implement rust Result type https://doc.rust-lang.org/std/result/
// type Result<T, E = unknown> =
//   | {
//       ok: true;
//       value: T;
//     }
//   | {
//       ok: false;
//       error: E;
//     };
//
// export const ok = <T>(value: T): Result<T> => ({ ok: true, value });

export const sumWhen = (array: number[], condition: (x: number) => boolean) =>
  array.reduce((acc, curr) => (condition(curr) ? acc + curr : acc), 0);

export const countWhen = (array: number[], condition: (x: number) => boolean) =>
  array.reduce((acc, curr) => (condition(curr) ? acc + 1 : acc), 0);

export type RemoveIndexSignature<T> = {
  [K in keyof T as K extends string
    ? string extends K
      ? never
      : K
    : never]: T[K];
};
