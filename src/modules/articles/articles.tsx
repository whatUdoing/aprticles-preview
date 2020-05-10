import React from 'react';

import { ArticlesProvider } from '../../features/articles/context/provider';
import ArticlesList from '../../features/articles/components/list';
import MainLayout from './layout/main';
import Header from './components/header';
import Aside from './components/aside';

const Articles = () => {
    return (
        <ArticlesProvider>
            <MainLayout
                header={<Header />}
                main={<ArticlesList />}
                aside={<Aside />}
            />
        </ArticlesProvider>
    );
};

export default Articles;
