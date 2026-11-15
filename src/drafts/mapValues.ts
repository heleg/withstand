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
