import {
    SourceItem,
    ArticlesSource,
    ArticlesSourceTypes
} from '../../../types/articles';
import { fetchFashionArticles, fetchSportsArticles } from './';

export const ArticlesSources: Record<ArticlesSourceTypes, SourceItem> = {
    [ArticlesSource.FASHION]: {
        id: ArticlesSource.FASHION,
        title: 'Fashion',
        action: fetchFashionArticles
    },
    [ArticlesSource.SPORTS]: {
        id: ArticlesSource.SPORTS,
        title: 'Sports',
        action: fetchSportsArticles
    }
};
