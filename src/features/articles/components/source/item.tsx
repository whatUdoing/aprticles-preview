import React, { useState, SyntheticEvent } from 'react';

import { FC } from 'react';
import { SourceItem } from 'src/types/articles';

type Props = {
    item: SourceItem;
    onChange: (item: SourceItem, checked: boolean) => void;
};
const SourceItem: FC<Props> = ({ item, onChange }) => {
    const [isChecked, setChecked] = useState(false);

    const handleChange = (evt: SyntheticEvent) => {
        const isChecked = (evt.target as HTMLInputElement).checked;

        setChecked(isChecked);
        onChange(item, isChecked);
    };

    return (
        <div className="article-sources__item">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
                {item.title}
            </label>
        </div>
    );
};

export default SourceItem;
