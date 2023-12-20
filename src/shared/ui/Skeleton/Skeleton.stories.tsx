import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  height: 30,
  width: 300,
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  height: 30,
  width: 300,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
