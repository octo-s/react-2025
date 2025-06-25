import React from "react";
import { type TDish } from "../../types/restaurant";
import sharedStyles from "../../styles/shared.module.scss";
import { Link } from "react-router";
import styles from "./Menu.module.scss";

type MenuProps = {
  menu: TDish[];
};

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  return menu.length ? (
    <div className={styles.menuList}>
      {menu.map(({ id, name }) => {
        return (
          <Link key={id} to={`/dish/${id}`} className={styles.menuItem}>
            {name}
          </Link>
        );
      })}
    </div>
  ) : (
    <div className={sharedStyles.empty}>Ресторан пока не добавил блюда</div>
  );
};
