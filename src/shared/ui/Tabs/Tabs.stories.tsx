import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 'test 1',
  tabs: [
    {
      value: 'test 2',
      content: 'test 2',
    },
    {
      value: 'test 3',
      content: 'test 3',
    },
  ],
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  value: 'test 1',
  tabs: [
    {
      value: 'test 2',
      content: 'test 2',
    },
    {
      value: 'test 3',
      content: 'test 3',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
