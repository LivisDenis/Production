import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, sed?',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, sed?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum dolor sit amet.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, sed?',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Lorem ipsum dolor sit amet.',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, sed?',
};
