import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { increment, decrement, add } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleAddFive = () => {
    add(5);
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="title-value">{counterValue}</h1>
      <button data-testid="increment-btn" type="button" onClick={handleIncrement}>+</button>
      <button data-testid="increment-btn" type="button" onClick={handleAddFive}>+5</button>
      <button data-testid="decrement-btn" type="button" onClick={handleDecrement}>-</button>
    </div>
  );
};
