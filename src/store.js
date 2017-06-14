// import { createStore } from 'redux';

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//     }

//     return state;
// }

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import uuid from 'uuid';

const STORAGE = window.localStorage;
const STORAGE_KEY = 'redux-blog';

export function getAll() {
  return new Promise((resolve) => {
    const results = STORAGE.getItem(STORAGE_KEY);
    try {
      resolve(
        results
        ? JSON.parse(results)
        : []
      );
    } catch (e) {
      resolve([]);
    }
  });
}

function saveAll(results){
	return new Promise (resolve=>{
		STORAGE.setItem(
			STORAGE_KEY,
			JSON.stringify(results)
			);
		resolve();
	});

}

export function insertEntry(title, content){
	const entry = {
		title,
		content,
		id: uuid(),
		time: new Date().getTime()
	};
	return getAll()
	.then(results => [...results, entry])
	.then(saveAll)
	.then(()=>entry);
}

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);
export default store;