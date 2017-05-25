import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {select} from '../actions';
import { connect} from 'react-redux';
//withRouter maybe used when the component is not render by a link
import { withRouter } from 'react-router';

const Detail = function({match,title, content}){
	return(
	<div>
		<h2>{title}</h2>
		<h3>{content}</h3>
	</div>
		)
}
function mapState(state, ownProps){
	let id= ownProps.match.params.articleId;
	return {
		title: state.data[id-1].title,
		content: state.data[id-1].content
		//use this api to change url directly
		//push: ownProps.history.push 
	}
}

export default connect(mapState)(Detail);