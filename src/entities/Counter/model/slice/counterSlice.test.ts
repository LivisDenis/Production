import { counterActions, counterReducer } from '../slice/counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('increment value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });
  test('decrement value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
