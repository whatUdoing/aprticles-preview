import React, { useReducer, useMemo, Dispatch, FC } from 'react';

import {
    ArticlesActionsType,
    ADD_ARTICLES,
    REMOVE_ARTICLES,
    SET_SORT,
    SORT
} from './actions';
import { ArticlesContext, ArticlesState } from './';
import { sort, convertDateToNumber } from './utils';

const defaultReducer = (
    state: ArticlesState,
    action: ArticlesActionsType
): ArticlesState => {
    switch (action.type) {
        case ADD_ARTICLES: {
            const newArticles = action.payload.articles.map((article) => {
                article.dateNumber = convertDateToNumber(article.date);

                return {
                    ...article,
                    source: action.payload.source
                };
            });
            return {
                ...state,
                articles: [...state.articles, ...newArticles]
            };
        }
        case REMOVE_ARTICLES: {
            return {
                ...state,
                articles: state.articles.filter(
                    (article) => article.source.id !== action.payload.source.id
                )
            };
        }
        case SET_SORT: {
            // const sortedArticles = sort(state.articles, action.payload.mode);

            return {
                ...state,
                // articles: sortedArticles,
                sortMode: action.payload.mode
            };
        }
        case SORT: {
            if (!state.sortMode) {
                return state;
            }

            const sortedArticles = sort(state.articles, state.sortMode);

            return {
                ...state,
                articles: sortedArticles
            };
        }
        default:
            return state;
    }
};

type Props = {
    reducer?: Dispatch<ArticlesActionsType>;
};

export const ArticlesProvider: FC<Props> = (props) => {
    const { reducer = defaultReducer, ...rest } = props;

    const [state, dispatch] = useReducer(reducer, {
        articles: [],
        sources: [],
        sortMode: null
    });

    const value: ArticlesContext = useMemo(() => [state, dispatch], [state]);

    return <ArticlesContext.Provider value={value} {...rest} />;
};
