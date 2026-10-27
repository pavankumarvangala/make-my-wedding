import { describe, expect, it } from "vitest";
import { ApiError } from "@/server/http/api-error";

describe("ApiError", () => {
  it("retains the application code and HTTP status", () => {
    const error = new ApiError("NOT_FOUND", "Resource not found.", 404);
    expect(error.code).toBe("NOT_FOUND");
    expect(error.status).toBe(404);
  });
});
