import React from "react";
import classNames from "classnames";
import styles from "./RestaurantTabs.module.scss";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";
import { type RootState } from "../../redux/store";

type RestaurantTabProps = {
  id: string;
  onClick: () => void;
  isActive: boolean;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({
  id,
  onClick,
  isActive = false,
}) => {
  const restaurant =
    useSelector((state: RootState) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  if (!name) {
    return null;
  }
  return (
    <Button
      key={restaurant.id}
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.active]: isActive,
      })}
    >
      {restaurant.name}
    </Button>
  );
};
