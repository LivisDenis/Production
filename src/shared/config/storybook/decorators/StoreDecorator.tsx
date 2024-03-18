import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFromReducer } from '@/features/addCommentForm/testing';
import { articlesDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';

const defaultAsyncReducers: ReducersList = {
  loginUser: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articlesDetailsPageReducer,
  addCommentForm: addCommentFromReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
