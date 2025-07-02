import { createContext } from "react";
export interface UserContextProps {
  user: { name: string; id: string } | null;
  toggleUser: () => void;
}
export const UserContext = createContext<UserContextProps>({
  user: null,
  toggleUser: () => {},
});
