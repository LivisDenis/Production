import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification = {
  id: '2',
  title: 'Уведомление 2',
  description: 'Произошло какое-то событие',
  href: 'http://localhost:3000/admin',
};

export const Normal = Template.bind({});
Normal.args = {
  item: notification,
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  item: notification,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
