import { ArticleItem, SourceItem } from '../../../types/articles';
import { SortsModeTypes } from 'src/types/components';

export const ADD_ARTICLES = 'ADD_ARTICLES';
export const REMOVE_ARTICLES = 'REMOVE_ARTICLES';
export const SET_SORT = 'SET_SORT';
export const SORT = 'SORT';

export interface IAddArticles {
    type: typeof ADD_ARTICLES;
    payload: {
        articles: Array<ArticleItem>;
        source: SourceItem;
    };
}

export interface IRemoveArticles {
    type: typeof REMOVE_ARTICLES;
    payload: {
        source: SourceItem;
    };
}

export interface ISetSort {
    type: typeof SET_SORT;
    payload: {
        mode: SortsModeTypes;
    };
}

export interface ISort {
    type: typeof SORT;
}

export type ArticlesActionsType =
    | IAddArticles
    | IRemoveArticles
    | ISetSort
    | ISort;
