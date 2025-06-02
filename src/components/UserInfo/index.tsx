import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { Button } from "../Button/Button";

export const UserInfo: React.FC = () => {
  const { user, toggleUser } = useContext(UserContext);

  return (
    <div>
      <h2>Пользователь: {user ? user.name : "Гость"}</h2>
      <Button onClick={toggleUser}>{user ? "Выйти" : "Войти"}</Button>
    </div>
  );
};
