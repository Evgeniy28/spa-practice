import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import { HomePage, HomeRoutes } from './pages/home/index';
import { ListRoutes } from './pages/list/index';
import { ContactRoutes } from './pages/contact/index';
import ErrorPage from './pages/error/index';

export default (
    <Route path={ App.path } component={ App } >
        <IndexRoute component={HomePage} />

        { HomeRoutes }
        { ListRoutes }
        { ContactRoutes }

        <Route path='*' component={ErrorPage} />
    </Route>
);
