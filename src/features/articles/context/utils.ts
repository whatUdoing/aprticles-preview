import { ArticleItem } from '../../../types/articles';
import { SortsModeTypes } from '../../../types/components';

const months = [
    'januar',
    'februar',
    'marz',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'dezember'
];

/**
 * Converts string date to number value(use for sorting)
 */
export const convertDateToNumber = (date: string) => {
    const [day, month, year] = date.split(' ');

    return parseInt(day) + months.indexOf(month) + parseInt(year);
};

const sortStrategies: Record<
    SortsModeTypes,
    (data: Array<ArticleItem>) => Array<ArticleItem>
> = {
    ASC: (data: Array<ArticleItem>) => {
        return data.sort(
            (article1: ArticleItem, article2: ArticleItem) =>
                article2.dateNumber - article1.dateNumber
        );
    },
    DESC: (data: Array<ArticleItem>) => {
        return data.sort(
            (article1: ArticleItem, article2: ArticleItem) =>
                article1.dateNumber - article2.dateNumber
        );
    }
};

export const sort = (
    articles: Array<ArticleItem>,
    sortStrategy: SortsModeTypes
) => {
    return sortStrategies[sortStrategy](articles);
};
