import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import i18nForTests from '../../../config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const ComponentRender = (children: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/', initialState, asyncReducers } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
