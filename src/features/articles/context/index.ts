import { createContext, useContext, Dispatch } from 'react';
import { ArticleItem } from '../../../types/articles';
import {
    ADD_ARTICLES,
    IAddArticles,
    ArticlesActionsType,
    SORT,
    ISort
} from './actions';

export type ArticlesState = {
    articles: Array<ArticleItem>;
    sources: Array<string>;
    sortMode: SortsModeTypes | null;
};

import { ArticlesSources } from '../api/sources';
import { SourceItem } from '../../../types/articles';
import { SortsModeTypes } from 'src/types/components';

export type ArticlesContext = [ArticlesState, Dispatch<ArticlesActionsType>];
export const ArticlesContext = createContext<ArticlesContext | null>(null);

export const getArticles = async (
    dispatch: Dispatch<ArticlesActionsType>,
    source: SourceItem
) => {
    try {
        const { articles } = await ArticlesSources[source.id].action();

        dispatch({
            type: ADD_ARTICLES,
            payload: {
                articles,
                source: source
            }
        } as IAddArticles);

        dispatch({
            type: SORT
        } as ISort);
    } catch {
        // TODO error handle
        console.error('Error while fetching article');
    }
};

export const useArticles = () => {
    const context = useContext(ArticlesContext);

    if (!context) {
        throw new Error('useArticles must be used within FilesProvider');
    }

    return context;
};

export { ArticlesProvider } from './provider';
