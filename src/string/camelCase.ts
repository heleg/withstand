type CamelCase<S extends string> = S extends `${infer A}_${infer B}`
  ? `${A}${Capitalize<CamelCase<B>>}`
  : S;

export function camelCase<S extends string>(str: S): CamelCase<S> {
  return str.replace(/_([a-z])/g, (_, char: string) =>
    char.toUpperCase(),
  ) as CamelCase<S>;
}
