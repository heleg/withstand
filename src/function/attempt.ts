import { failure } from "../internal/failure";
import type { Result } from "./Result";

type SyncOnly<T> =
  T extends PromiseLike<unknown>
    ? "Error: Use toResult() for promises"
    : unknown;

export function attempt<T>(fn: () => T & SyncOnly<T>): Result<T> {
  try {
    return { ok: true, value: fn() };
  } catch (error) {
    return failure(error);
  }
}
