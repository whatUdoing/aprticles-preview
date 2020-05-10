import React from 'react';

import { useArticles } from '../../context';
import ArticleItem from '../item/';
import List from '../../../../components/list';
import Box from '../../../../components/box/';

const boxModifiers = {
    primary: true,
    spacing: true,
    shadow: true
};

const articlesListModifiers = {
    spacingHorizontal: true
};

const articleListClasses = {
    list: 'list_spacing'
};

const ArticlesList = () => {
    const [{ articles }] = useArticles();

    return (
        <div>
            {articles.length ? (
                <Box cssClasses={articlesListModifiers}>
                    <List
                        items={articles}
                        ItemComponent={ArticleItem}
                        cssClasses={articleListClasses}
                    />
                </Box>
            ) : (
                <Box cssClasses={boxModifiers}>No articles found</Box>
            )}
        </div>
    );
};

export default ArticlesList;
