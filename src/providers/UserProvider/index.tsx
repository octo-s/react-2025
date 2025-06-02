import React, { useState } from "react";
import { UserContext, type UserContextProps } from "./UserContext";

type UserProviderProps = {
  children?: React.ReactNode;
};
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextProps["user"]>(null);

  const mockUser = {
    name: "UserName",
  };

  const toggleUser = () => {
    setUser((prev) => (prev ? null : mockUser));
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};
