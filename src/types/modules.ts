import { ReactNode, LazyExoticComponent } from 'react';

type RouteItem = {
    component: LazyExoticComponent<() => JSX.Element> | ReactNode;
    path: string;

    exact?: boolean;
};

export interface IModuleItem {
    key: string;
    name: string;

    mainNav?: boolean;

    routeProps: RouteItem;
}
