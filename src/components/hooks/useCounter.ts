import { useState } from "react";

export const useCounter = (maxCount?: number, minCount?: number) => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => {
    if (maxCount && count === maxCount) {
      return;
    }

    setCount(count + 1);
  };
  const onDecrement = () => {
    if (maxCount && count === minCount) {
      return;
    }

    setCount(count - 1);
  };

  return {
    count,
    onIncrement,
    onDecrement,
  };
};
