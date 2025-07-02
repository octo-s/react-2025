import React, { useState } from "react";
import { UserContext, type UserContextProps } from "./UserContext";

type UserProviderProps = {
  children?: React.ReactNode;
};

const mockUser = {
  name: "Agata",
  id: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextProps["user"]>(null);

  const toggleUser = () => {
    setUser((prev) => (prev ? null : mockUser));
  };

  return <UserContext value={{ user, toggleUser }}>{children}</UserContext>;
};
