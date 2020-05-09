import React, { FC, useState } from 'react';
import './style.scss';

import { SortsModeTypes, SortsMode } from '../../types/components';

type Props = {
    title: string;
    onToggle?: (currentMode: SortsModeTypes) => void;
    mode?: SortsModeTypes;
};

const ModesClassMap: Record<SortsModeTypes, string> = {
    [SortsMode.ASC]: 'sort_asc',
    [SortsMode.DESC]: 'sort_desc'
};

const Sort: FC<Props> = ({ title, mode = '', onToggle = () => {} }) => {
    const [currentMode, setMode] = useState<SortsModeTypes>(
        mode as SortsModeTypes
    );

    const toggleSort = () => {
        let modeToSet: SortsModeTypes = SortsMode.ASC;

        if (currentMode === SortsMode.ASC) {
            modeToSet = SortsMode.DESC;
        }

        setMode(modeToSet);
        onToggle(modeToSet);
    };

    return (
        <div
            role="button"
            onClick={toggleSort}
            className={`sort ${ModesClassMap[currentMode] ?? ''}`}
        >
            <span className="sort__title">{title}</span>
        </div>
    );
};

export default Sort;
