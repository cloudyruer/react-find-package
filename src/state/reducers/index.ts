import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

// take that function and give us back the type of whatever the function returns
// and we are gonna assign that type to RootState
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
