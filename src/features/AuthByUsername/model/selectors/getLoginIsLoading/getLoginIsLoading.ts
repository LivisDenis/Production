import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state.loginUser?.isLoading || false;
