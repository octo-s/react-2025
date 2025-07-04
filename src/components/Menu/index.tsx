import React from "react";
import type { TDish } from "../../types/restaurant";
import sharedStyles from "../../styles/shared.module.scss";
import styles from "./Menu.module.scss";
import { MenuItemLink } from "../MenuItemLink";

type MenuProps = {
  menu: TDish[];
};

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  return menu.length ? (
    <div className={styles.menuList}>
      {menu.map((dish) => (
        <MenuItemLink key={dish.id} dish={dish} />
      ))}
    </div>
  ) : (
    <div className={sharedStyles.empty}>Ресторан пока не добавил блюда</div>
  );
};
