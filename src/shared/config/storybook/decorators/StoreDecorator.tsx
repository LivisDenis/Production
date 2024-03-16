import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line livis-plugin/public-api-import
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFromReducer } from '@/features/addCommentForm';
import { articlesDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { profileReducer } from '@/features/editableProfileCard';
// eslint-disable-next-line livis-plugin/public-api-import
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';

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
