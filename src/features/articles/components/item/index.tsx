import React, { FC } from 'react';
import { ArticleItem } from 'src/types/articles';
import LazyImage from '../../../../components/lazy-image/';

import './styles/main.scss';
import './styles/responsive.scss';

type Props = {
    item: ArticleItem;
};
const ArticleItem: FC<Props> = ({ item }) => {
    return (
        <article className="row article-preview middle-xs">
            <div className="col-xs article-preview__content">
                <header className="article-preview__header">
                    {item.title}
                </header>

                <p className="article-preview__preamble">{item.preamble}</p>

                <footer className="article-preview__footer">
                    <div className="row end-xs">
                        <div className="col">
                            <div>
                                <time dateTime={item.date}>{item.date}</time>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="col">
                <figure className="article-preview__image">
                    <LazyImage src={item.image} />
                    {/* <img src={item.image} /> */}
                </figure>
            </div>
        </article>
    );
};

export default ArticleItem;
