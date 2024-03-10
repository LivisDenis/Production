import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

export default {
  title: 'entities/ArticleDetailsSkeleton',
  component: ArticleDetailsSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsSkeleton>;

const Template: ComponentStory<typeof ArticleDetailsSkeleton> = () => <ArticleDetailsSkeleton />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
