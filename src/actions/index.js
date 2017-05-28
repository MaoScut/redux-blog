import * as storage from '../store';

export const GET_ARTICLES = 'GET_ARTICLES';
export const SELECT_ARTICLE = 'SELECT_ARTICLE';
export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';

export function entry(){
	return {
		type: GET_ARTICLES
	}
}

export function select(id){
	return {
		type: SELECT_ARTICLE,
		id: id
	}
}

function updateSavedEntry(id){
	return {
		type: UPDATE_SAVED_ENTRY,
		id
	}
}

export function saveEntry(item){
	const {title, id, content} = item;
	return dispatch=>{
		if(id){

		} else {
			storage.insertEntry(title, content)
			  .then(inserted=> dispatch(updateSavedEntry(inserted.id)))
			  .then(()=>storage.getAll())
			  .then(items=>dispatch(updataEntryList(items)));
		}
	}
}

export function fetchEntryList(){
	return dispatch=>{
		storage.getAll()
		.then(items=>dispatch(updataEntryList(items)))
	}
}

function updataEntryList(items){
	debugger;
	return {
		type: UPDATE_ENTRY_LIST,
		items
	}
}