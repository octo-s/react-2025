import React from "react";

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
    <>
      <button type="button" onClick={onDecrement} disabled={value === minCount}>
        -
      </button>
      {/*{value}*/}
      <button type="button" onClick={onIncrement} disabled={value === maxCount}>
        +
      </button>
    </>
  );
};
