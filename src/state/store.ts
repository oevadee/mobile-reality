import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import housesReducer from './reducers/housesReducer';
import logger from 'redux-logger';
import { HousesState } from './types/housesTypes';

export interface ICombinedReducers {
  houses: HousesState;
}

const rootReducer = combineReducers({
  houses: housesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
