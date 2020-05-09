import React from 'react';

import { useArticles } from '../../context';
import ArticleItem from '../item/';
import List from '../../../../components/list';

const ArticlesList = () => {
    const [{ articles }] = useArticles();

    return (
        <div>
            {articles.length ? (
                <List items={articles} ItemComponent={ArticleItem} />
            ) : (
                <div>Empty list</div>
            )}
        </div>
    );
};

export default ArticlesList;
