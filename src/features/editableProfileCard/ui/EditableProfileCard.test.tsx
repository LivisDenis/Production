import { DeepPartial } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { Country } from '@/shared/const/common';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';

import { profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: 1,
  username: 'admin',
  age: 22,
  country: Country.Kazakhstan,
  firstname: 'admin',
  lastname: 'admin',
  city: 'Moscow',
  avatar: 'link',
};

const options: DeepPartial<StateSchema> = {
  profile: {
    data: profile,
    form: profile,
    isLoading: false,
    readonly: true,
  },
  user: {
    authData: {
      id: 1,
      username: 'admin',
    },
  },
};

describe('features/EditableProfileCard', () => {
  test('readonly mode switching', async () => {
    ComponentRender(<EditableProfileCard id='1' />, {
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));
    expect(screen.getByTestId('EditableProfileCard.Cancel')).toBeInTheDocument();
  });

  test('canceling an edit cancels the changes', async () => {
    ComponentRender(<EditableProfileCard id='1' />, {
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('EditableProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('EditableProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('EditableProfileCard.Lastname'), 'user');

    expect(screen.getByTestId('EditableProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('EditableProfileCard.Lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCard.Cancel'));
    expect(screen.getByTestId('EditableProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('EditableProfileCard.Lastname')).toHaveValue('admin');
  });

  test('error on save', async () => {
    ComponentRender(<EditableProfileCard id='1' />, {
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCard.Save'));

    const errorElements = screen.getAllByTestId('EditableProfileCard.Error.Text');
    errorElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test('sending a put request after editing', async () => {
    const mockPutRequest = jest.spyOn($api, 'put');
    ComponentRender(<EditableProfileCard id='1' />, {
      initialState: options,
      asyncReducers: {
        profile: profileReducer,
      },
    });

    await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('EditableProfileCard.Firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCard.Save'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
