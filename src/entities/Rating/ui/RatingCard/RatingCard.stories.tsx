import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { RatingCard } from './RatingCard';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Оцените статью',
  feedbackTitle: 'Напишите отзыв',
  hasFeedback: false,
  rate: 0,
};
Normal.decorators = [StoreDecorator({})];

export const NormalWithRate = Template.bind({});
NormalWithRate.args = {
  title: 'Оцените статью',
  feedbackTitle: 'Напишите отзыв',
  rate: 5,
};
NormalWithRate.decorators = [StoreDecorator({})];

export const NormalWithoutFeedback = Template.bind({});
NormalWithoutFeedback.args = {
  title: 'Оцените статью',
  feedbackTitle: 'Напишите отзыв',
  hasFeedback: false,
  rate: 0,
};
NormalWithoutFeedback.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  title: 'Оцените статью',
  feedbackTitle: 'Напишите отзыв',
  rate: 0,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
