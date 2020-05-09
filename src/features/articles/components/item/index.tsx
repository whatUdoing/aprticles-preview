import React, { FC } from 'react';
import { ArticleItem } from 'src/types/articles';

type Props = {
    item: ArticleItem;
};
const ArticleItem: FC<Props> = ({ item }) => {
    return (
        <article>
            <header>{item.title}</header>

            <time dateTime={item.date}>{item.date}</time>

            <figure>
                <img src={item.image} />
            </figure>

            <p>{item.preamble}</p>
        </article>
    );
};

export default ArticleItem;
