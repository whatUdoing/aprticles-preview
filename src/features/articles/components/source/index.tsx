import React from 'react';

import { ArticlesSources } from '../../api/sources';
import { ArticlesSourceTypes, SourceItem } from 'src/types/articles';
import Item from './item';
import { useArticles, getArticles } from '../../context';
import { REMOVE_ARTICLES } from '../../context/actions';

const ArticleSources = () => {
    const [, dispatch] = useArticles();
    const sources = Object.keys(ArticlesSources).map(
        (source) => ArticlesSources[source as ArticlesSourceTypes]
    );

    const handleSourceChange = (source: SourceItem, isChecked: boolean) => {
        isChecked
            ? getArticles(dispatch, source)
            : dispatch({
                  type: REMOVE_ARTICLES,
                  payload: {
                      source
                  }
              });
    };

    return (
        <div>
            <ul>
                {sources.map((source) => (
                    <li key={source.id}>
                        <Item item={source} onChange={handleSourceChange} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleSources;
