import { screen } from '@testing-library/react';

import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar rendering', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
