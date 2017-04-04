import React from 'react';
import { Route } from 'react-router';

import ListPage from './list';
import ItemDetails from './item-details';

export default (
    <Route>
        <Route path={ ListPage.path } component={ ListPage } />
        <Route path={ ListPage.path + '/:id' } component={ ItemDetails } />
    </Route>
);
