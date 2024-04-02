import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager, StateSchema } from '@/app/providers/StoreProvider';
import { StateSchemaKeys } from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer);
        dispatch({ type: `@INIT ${name} REDUCER` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `@DESTROY ${name} REDUCER` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  return <>{children}</>;
};
