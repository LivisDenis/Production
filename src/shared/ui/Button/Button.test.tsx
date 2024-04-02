import { render, screen } from '@testing-library/react';

import { Button } from '../Button/Button';
import { ButtonTheme } from './Button';

describe('Button', () => {
  test('Button rendering', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Button test styles', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
