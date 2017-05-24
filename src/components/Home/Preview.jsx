import React from 'react';
import './Preview.css';

export default class extends React.Component {
	static propTypes = {
		title: React.PropTypes.string,
		link: React.PropTypes.string
	};
	render(){
		return(
			<article className="article-preview-item">
				<h1 className="title">{this.props.title}</h1>
				<span className="date">{this.props.date}</span>
				<p className="desc">{this,.props.description}</p>
			</article>)
	}
}