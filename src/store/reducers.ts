import { combineReducers } from 'redux';

// reducers
import userReducer from './user/reducer';
import userReposReducer from './repositories/reducer';

const rootReducer = combineReducers({
  USER: userReducer || (() => null),
  REPOS: userReposReducer || (() => null),
});

export default rootReducer;
