import { UserObj } from "../types/interfaces";

export const getCurrentUser = (): UserObj | null => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};