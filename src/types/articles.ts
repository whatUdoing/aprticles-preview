import { EnumLiteralsOf } from './general';

export interface ArticleItem {
    id: number;
    image: string;
    date: string;
    dateNumber: number;
    category: string;
    title: string;
    preamble: string;
    source: SourceItem;
}

export type ArticlesSourceTypes = EnumLiteralsOf<typeof ArticlesSource>;
export const ArticlesSource = Object.freeze({
    FASHION: 'FASHION' as 'FASHION',
    SPORTS: 'SPORTS' as 'SPORTS'
});

export type SourceItem = {
    id: ArticlesSourceTypes;
    title: string;
    action: Function;
};
