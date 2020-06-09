import React from 'react';
import { Route } from 'react-router-dom';
import PassList from './containers/PassListView';
import PassDetail from './containers/passDetailView';
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PassList} />
        <Route exact path='/:passID' component={PassDetail} />
    </div>
);

export default BaseRouter;