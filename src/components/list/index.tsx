import React, { FC } from 'react';

import './styles/main.scss';

type Props = {
    items: Array<{
        id: string | number;
        text?: string;
    }>;
    ItemComponent?: FC<any>;
    itemProps?: Record<string, any>;
    cssClasses?: {
        list?: string;
        item?: string;
    };
};
const List: FC<Props> = ({
    items,
    ItemComponent,
    itemProps = {},
    cssClasses = {}
}) => {
    return (
        <ul className={`list ${cssClasses.list ?? ''}`}>
            {items.map((item) => (
                <li
                    className={`list__item ${cssClasses.item ?? ''}`}
                    key={item.id}
                >
                    {ItemComponent ? (
                        <ItemComponent item={item} {...itemProps} />
                    ) : (
                        item.text
                    )}
                </li>
            ))}
        </ul>
    );
};

export default List;
