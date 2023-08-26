import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first arg', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('with additional class', () => {
    expect(classNames('cls', {}, ['add1', 'add2'])).toBe('cls add1 add2');
  });

  test('with all params', () => {
    expect(classNames('class1', { selected: true }, ['add1', 'add2'])).toBe('class1 add1 add2 selected');
  });

  test('with mods false', () => {
    expect(classNames('class1', { selected: true, collapsed: false }, ['add1'])).toBe('class1 add1 selected');
  });
});
