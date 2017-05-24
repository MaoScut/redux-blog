import {combineReducers} from 'redux';

import list from '../components/Home/PreviewListRedux';

export default combineReducers({
	list
});

export * as listAction from '../components/Home/PreviewListRedux';