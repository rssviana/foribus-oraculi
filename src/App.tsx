import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from 'screens/Home';
import UserInfo from 'screens/UserInfo';
import NotFound from 'screens/NotFound';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/user-info/:username" exact component={UserInfo} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
