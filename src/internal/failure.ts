import type { Result } from "../function/Result";

export function failure(error: unknown): Result<never> {
  return {
    ok: false,
    error:
      error instanceof Error
        ? error
        : new Error(String(error), { cause: error }),
  };
}
