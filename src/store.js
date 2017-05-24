// import { createStore } from 'redux';

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//     }

//     return state;
// }

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import data from '../api/articles.json';
import { createStore, bindActionCreators } from 'redux';
import reducer from './redux/reducers';

const store = createStore(reducer);
export default store;