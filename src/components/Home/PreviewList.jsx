import React from 'react';
import Preview from './Preview';

export default class extends React.Component {
	componentDidMount(){
		this.props.loadArticles();
	}
	render(){
		const {loading, error, articleList} = this.props;
		if(error){
			return <p className="message">something is wrong!</p>
		}
		if(loading){
			return <p className="message">loading......</p>
		}
		return this.props.articleList.map(item=>(<Preview {...item} key={item.id} />))
	}
}