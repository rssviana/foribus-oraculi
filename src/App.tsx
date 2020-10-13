import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import UserInfo from 'screens/UserInfo';
import NotFound from 'screens/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/user-info" exact component={UserInfo} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
