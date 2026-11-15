export type RemoveIndexSignature<T> = {
  [
    K in keyof T as K extends string ? (string extends K ? never : K) : never
  ]: T[K];
};
