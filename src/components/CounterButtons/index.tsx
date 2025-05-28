import React from "react";
import styles from "./CounterButtons.module.scss";
import { Button } from "../Button/Button";

type CounterButtonsProps = {
  maxCount: number;
  minCount: number;
  onDecrement: () => void;
  onIncrement: () => void;
  value: number;
};

export const CounterButtons: React.FC<CounterButtonsProps> = ({
  maxCount,
  minCount,
  onDecrement,
  onIncrement,
  value,
}) => {
  return (
    <div className={styles.counter}>
      <Button
        position="left"
        type="button"
        onClick={onDecrement}
        disabled={value === minCount}
      >
        -
      </Button>
      <span className={styles.text}>{value}</span>
      <Button
        position="right"
        type="button"
        onClick={onIncrement}
        disabled={value === maxCount}
      >
        +
      </Button>
    </div>
  );
};
