import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import { NotificationList } from './NotificationList';

const notification = {
  id: '2',
  title: 'Уведомление 2',
  description: 'Произошло какое-то событие',
  href: 'http://localhost:3000/admin',
};

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [withMock],
  // parameters: {
  //   mockData: [
  //     {
  //       url: `${__API__}/notifications`,
  //       method: 'GET',
  //       status: 200,
  //       response: {
  //         data: [
  //           { ...notification, id: '1' },
  //           { ...notification, id: '2' },
  //           { ...notification, id: '3' },
  //           { ...notification, id: '4' },
  //           { ...notification, id: '5' },
  //         ],
  //       },
  //     },
  //   ],
  // },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
