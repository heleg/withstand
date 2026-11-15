import { failure } from "../internal/failure";
import type { Result } from "./Result";

export async function toResult<T>(promise: Promise<T>): Promise<Result<T>> {
  try {
    return { ok: true, value: await promise };
  } catch (error) {
    return failure(error);
  }
}
