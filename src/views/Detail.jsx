import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import {select} from '../actions';
import { connect} from 'react-redux';
//withRouter maybe used when the component is not render by a link
import { withRouter } from 'react-router';

const Detail = function({ match, title, content }){
	return(
	<div>
		<h2>{title}</h2>
		<h3>{content}</h3>
	</div>
		)
}
function mapState(state, ownProps){
	let id= ownProps.match.params.articleId;
	debugger;
	let obj = state.data.filter(item=>item.id==id)[0];//this method returns a array!!!
	return {
		title: obj.title,
		content: obj.content
		//use this api to change url directly
		//push: ownProps.history.push 
	}
}

export default connect(mapState)(Detail);