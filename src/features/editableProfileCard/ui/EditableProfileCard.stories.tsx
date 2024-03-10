import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Country } from '@/shared/const/common';
import { Currency } from '@/entities/CurrencySelect';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const profile = {
  id: 1,
  username: 'admin',
  age: 22,
  country: Country.Kazakhstan,
  firstname: 'admin',
  lastname: 'admin',
  city: 'Moscow',
  currency: Currency.USD,
  avatar: 'https://artjapan.ru/wp-content/uploads/2022/01/6d9834b8e903b9518dc5f74e33050283.jpg',
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  id: '1',
};
Normal.decorators = [StoreDecorator({
  profile: {
    form: profile,
    data: profile,
    isLoading: false,
    readonly: true,
  },
})];

export const Dark = Template.bind({});
Dark.args = {
  id: '1',
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: profile,
    data: profile,
    isLoading: false,
    readonly: true,
  },
})];
