import * as ActionTypes from '../actions';
import articles from '../../api/articles.json';

const initialState = {
  data: []
};

export default function blog(state = initialState, action) {
  switch (action.type) {
  	case ActionTypes.UPDATE_ENTRY_LIST:
  	  return Object.assign({}, state, { data: action.items });
    case ActionTypes.SELECT_ARTICLE:
      return Object.assign({}, state, { selectedId: action.id });
    case ActionTypes.GET_ARTICLES:
      return Object.assign({}, state, { data: articles });
    default:
      return state;
  }
}