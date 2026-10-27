import { errorResponse } from "@/server/http/api-response";

export type ApiHandler = (request: Request) => Promise<Response>;

export function withApiErrorHandling(handler: ApiHandler): ApiHandler {
  return async (request) => {
    try {
      return await handler(request);
    } catch (error) {
      return errorResponse(error);
    }
  };
}
