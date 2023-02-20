import { v4 as uuid } from "uuid";

export function generateUniqueIdentifier() {
  return uuid();
}
