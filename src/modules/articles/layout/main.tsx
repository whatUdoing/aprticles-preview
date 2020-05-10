import React, { ReactNode, FC } from 'react';

import './styles/main.scss';
import './styles/responsive.scss';

type Props = {
    header: ReactNode;
    aside: ReactNode;
    main: ReactNode;
};
const ArticlesMainLayout: FC<Props> = ({ header, aside, main }) => {
    return (
        <div className="articles-layout">
            {header && (
                <header className="articles-layout__header">{header}</header>
            )}
            {aside && <aside className="articles-layout__aside">{aside}</aside>}
            {main && <main className="articles-layout__main">{main}</main>}
        </div>
    );
};

export default ArticlesMainLayout;
