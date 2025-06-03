import React, { useState } from "react";
import { UserContext, type UserContextProps } from "./UserContext";

type UserProviderProps = {
  children?: React.ReactNode;
};

const mockUser = {
  name: "UserName",
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextProps["user"]>(null);

  const toggleUser = () => {
    setUser((prev) => (prev ? null : mockUser));
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};
