import { ZodError, type ZodType } from "zod";
import { ApiError } from "@/server/http/api-error";

export function parseInput<T>(schema: ZodType<T>, input: unknown): T {
  const result = schema.safeParse(input);
  if (!result.success) {
    throw new ApiError("VALIDATION_ERROR", "Invalid request data.", 400, result.error.flatten());
  }
  return result.data;
}

export function isValidationError(error: unknown): error is ZodError {
  return error instanceof ZodError;
}
