import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import DashboardConfiguration from '../pages/DahsboardConfigurations';
import EditProfile from '../pages/EditProfile';

// That file correspond a test, don't use that route.
import UserList from '../pages/UserList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/dashboard-configurations"
        component={DashboardConfiguration}
      />
      <Route path="/edit" component={EditProfile} />
      <Route path="/users" component={UserList} />
    </Switch>
  );
}
