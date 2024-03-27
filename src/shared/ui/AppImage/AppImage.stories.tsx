import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

export default {
  title: 'features/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://www.hocktraining.com/home/getpicturethumbnail/830',
  alt: 'image',
  height: 200,
};
Normal.decorators = [StoreDecorator({})];

export const WithFallback = Template.bind({});
WithFallback.args = {
  ...Normal.args,
  fallback: <Skeleton height={200} width="100%" />,
};
WithFallback.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  ...Normal.args,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
