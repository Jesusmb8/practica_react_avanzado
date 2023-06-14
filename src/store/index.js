import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import * as reducers from './reducers';
import * as actionCreators from './actions';
import * as advertsService from '../components/adverts/service';

import thunk from 'redux-thunk';

console.log('reducers', reducers);

const reducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  actionCreators,
});

const middleware = [thunk.withExtraArgument({ advertsService })];

export default function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
  return store;
}
