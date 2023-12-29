import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="title-value">{counterValue}</h1>
      <button data-testid="increment-btn" type="button" onClick={increment}>+</button>
      <button data-testid="decrement-btn" type="button" onClick={decrement}>-</button>
    </div>
  );
};
