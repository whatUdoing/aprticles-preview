import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { allModules } from '../../../modules/';

const RouterManger = () => {
    return (
        <Switch>
            {/* TODO custom loader component */}
            <Suspense fallback="loading...">
                {allModules.map((module) => (
                    // TODO fix
                    //@ts-ignore
                    <Route key={module.key} {...module.routeProps} />
                ))}
            </Suspense>
        </Switch>
    );
};

export default RouterManger;
