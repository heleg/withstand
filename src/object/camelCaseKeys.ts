import { camelCase } from "../string/camelCase";

export type CamelCaseKeys<T> = {
  [
    K in keyof T as K extends string ? ReturnType<typeof camelCase<K>> : K
  ]: T[K];
};

export function camelCaseKeys<T extends object>(obj: T): CamelCaseKeys<T> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [camelCase(key), value]),
  ) as CamelCaseKeys<T>;
}
