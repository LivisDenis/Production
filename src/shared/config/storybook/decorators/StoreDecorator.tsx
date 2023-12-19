import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'pages/ProfilePage';
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFromReducer } from 'features/addCommentForm';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { articlesDetailsPageReducer } from 'pages/ArticleDetailsPage';

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
