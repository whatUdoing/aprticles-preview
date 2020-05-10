import React from 'react';

import { ArticlesSources } from '../../api/sources';
import { ArticlesSourceTypes, SourceItem } from 'src/types/articles';
import Item from './item';
import { useArticles, getArticles } from '../../context';
import { REMOVE_ARTICLES } from '../../context/actions';
import List from '../../../../components/list/';
import './styles/main.scss';

const cssClasses = {
    list: 'article-sources__list'
};

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
        <div className="article-sources">
            <h4 className="article-sources__header">Data sources</h4>

            <List
                cssClasses={cssClasses}
                items={sources}
                ItemComponent={Item}
                itemProps={{
                    onChange: handleSourceChange
                }}
            />
        </div>
    );
};

export default ArticleSources;
