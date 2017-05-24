

export const GET_ARTICLES = 'GET_ARTICLES';
export const SELECT_ARTICLE = 'SELECT_ARTICLE';

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