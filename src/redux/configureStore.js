import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-dom';

import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers';

const FetchMiddleware=createFetchMiddleware();
const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware,FetchMiddleware,)
	)(createStore);

const reducer = combineReducers(Object.assign({},rootReducer, {routing: routerReducer}))

export default function configureStore(initialState) {
	const store = finalCreateStore(reducer, initialState);
	return store;
}