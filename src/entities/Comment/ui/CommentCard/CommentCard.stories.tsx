import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import { Comment } from '../../model/types/comment';
import { CommentCard } from './CommentCard';

const comment: Comment = {
  id: 1,
  user: {
    id: 1,
    username: 'admin',
    avatar: 'https://wallpapers.com/images/featured/cute-naruto-jtmjd4ifiqi7a48s.jpg',
  },
  text: 'test value',
};

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment,
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
