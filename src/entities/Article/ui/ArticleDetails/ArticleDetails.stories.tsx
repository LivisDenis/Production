import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const article = {
  id: '2',
  title: 'Kotlin news',
  subtitle: 'Что нового в Kotlin за 2022 год?',
  img: 'https://decode.kz/images/blog/652cfcc35ca0449611983946.jpg',
  views: 2032,
  user: {
    id: 1,
    username: 'admin',
    avatar: 'https://wallpapers.com/images/featured/cute-naruto-jtmjd4ifiqi7a48s.jpg',
  },
  createdAt: '12.04.2023',
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  ],
} as Article;

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ articleDetails: { data: article, isLoading: false } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ articleDetails: { data: article, isLoading: false } })];
