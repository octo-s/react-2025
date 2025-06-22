import React from "react";
import { NavLink } from "react-router";
import classNames from "classnames";
import styles from "./RestaurantNavLink.module.scss";

type RestaurantNavLinkProps = {
  to: string;
  text: string;
};

export const RestaurantNavLink: React.FC<RestaurantNavLinkProps> = ({
  to,
  text,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.navLink, {
          [styles.active]: isActive,
        })
      }
    >
      <h3>{text}</h3>
    </NavLink>
  );
};
