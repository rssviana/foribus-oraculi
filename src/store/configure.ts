import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import * as services from 'services';
import { AppState } from './types';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware({
  context: {
    ...services,
  },
});

const middlewares = [sagaMiddleware];

const store: Store<AppState> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
