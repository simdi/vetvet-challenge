import { combineReducers } from '@reduxjs/toolkit';

import practiceReducer from './features/practice';

const rootReducer = combineReducers({
  practices: practiceReducer,
});

export default rootReducer;
