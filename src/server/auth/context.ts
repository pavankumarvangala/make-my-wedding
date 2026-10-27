export interface AuthenticatedUserContext {
  userId: string;
  membershipId: string;
  weddingId: string;
  role: "ADMIN" | "MANAGER";
}

// Session resolution is intentionally not implemented in the scaffold.
