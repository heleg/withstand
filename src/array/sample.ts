export function sample<T>(arr: readonly T[]): T | undefined {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
