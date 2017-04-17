import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import NotFound from './app/components/not-found';
import ImmigrationTool from './immigration-tool';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={ImmigrationTool} />
        <Route path='/*' component={NotFound} />
    </Route>
);
