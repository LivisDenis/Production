import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
  test('Button rendering', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Button test styles', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
