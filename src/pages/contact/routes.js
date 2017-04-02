import React from 'react';
import { Route } from 'react-router';

import ContactPage from './contact';

export default (
    <Route>
        <Route path={ContactPage.path} component={ContactPage} />
    </Route>
);
