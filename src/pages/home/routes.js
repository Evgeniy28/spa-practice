import React from 'react';
import { Route } from 'react-router';

import HomePage from './home';

export default (
    <Route>
        <Route path={HomePage.path} component={HomePage} />
    </Route>
);
