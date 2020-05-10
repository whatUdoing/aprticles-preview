import React from 'react';

import Sort from '../../../../components/sort/';
import { useArticles } from '../../context';
import { SortsModeTypes } from 'src/types/components';
import { SORT, SET_SORT } from '../../context/actions';

const SortArticleByDate = () => {
    const [, dispatch] = useArticles();

    const handleSortChange = (sortingMode: SortsModeTypes) => {
        dispatch({
            type: SET_SORT,
            payload: {
                mode: sortingMode
            }
        });

        dispatch({
            type: SORT
        });
    };

    return <Sort title="Sort by date" onToggle={handleSortChange} />;
};

export default SortArticleByDate;
