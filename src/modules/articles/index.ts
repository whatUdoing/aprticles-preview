import { lazy } from 'react';
import { IModuleItem } from '../../types/modules';

export default {
    routeProps: {
        component: lazy(() => import('./articles')),
        path: '/',
        exact: true
    },

    name: 'Articles list',
    key: 'articles'
} as IModuleItem;
