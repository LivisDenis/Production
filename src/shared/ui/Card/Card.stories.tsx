import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'value test',
};
Normal.decorators = [StoreDecorator({})];

export const NormalOutline = Template.bind({});
NormalOutline.args = {
  children: 'value test',
  theme: CardTheme.OUTLINE,
};
NormalOutline.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  children: 'value test',
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
