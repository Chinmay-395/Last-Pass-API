import React from 'react';
import { Route } from 'react-router-dom';
import PassList from './containers/PassListView';
import PassDetail from './containers/passDetailView';
import Login from './containers/Login'
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PassList} />
        <Route exact path='/pass_data/:passID/' component={PassDetail} />
        <Route exact path='/login/' component={Login} />
    </div>
);

export default BaseRouter;