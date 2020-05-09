import React, { ReactNode, FC, Component } from 'react';

type Props = {
    items: Array<{
        id: string | number;
        text?: string;
    }>;
    ItemComponent?: FC<any>;
};
const List: FC<Props> = ({ items, ItemComponent }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {ItemComponent ? <ItemComponent item={item} /> : item.text}
                </li>
            ))}
        </ul>
    );
};

export default List;
