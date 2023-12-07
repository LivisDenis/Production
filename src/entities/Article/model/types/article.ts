import { User } from 'entities/User';

export enum ArticleBlockType {
    TEXT='TEXT',
    CODE='CODE',
    IMAGE='IMAGE',
}

export enum ArticleView {
    BIG='BIG',
    SMALL='SMALL',
}

interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}

export enum ArticleType {
    IT='IT',
    SCIENCE = 'SCIENCE',
    POLITICS='POLITICS',
    ECONOMICS='ECONOMICS',
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    id: string
    title: string
    user: User
    subtitle: string
    img: string
    views: number,
    createdAt: string
    type: ArticleType[],
    blocks: ArticleBlock[]
}
