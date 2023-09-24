import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../../config/i18n/i18nForTests';

interface ComponentRenderOptions {
    route?: string
}

export const ComponentRender = (children: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/' } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {children}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
