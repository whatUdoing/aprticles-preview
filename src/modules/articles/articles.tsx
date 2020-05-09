import React from 'react';

import { ArticlesProvider } from '../../features/articles/context/provider';
import ArticlesList from '../../features/articles/components/list';
import ArticleSources from '../../features/articles/components/source';
import SortArticleByDate from '../../features/articles/components/sorting';

const Articles = () => {
    return (
        <ArticlesProvider>
            <SortArticleByDate />
            <ArticleSources />
            <ArticlesList />
        </ArticlesProvider>
    );
};

export default Articles;
