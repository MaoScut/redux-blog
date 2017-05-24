import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {select} from '../actions';
import { connect} from 'react-redux';

class Detail extends Component {
	render(){
		let title=this.props.title||'no';
		let content= this.props.content||'no';
		return (
			<div>
			<h1>{title}</h1>
			<h2>{content}</h2>
			</div>
			);
	}
}
let HDetail=connect(mapState,mapDispatch)(Detail);
// const Detail = ({match})=>(
// 	<div>
// 		<h2>{match.params.articleId}</h2>
// 	</div>
// 	)
// const DetailContainer = ({match})=>(
// 	<div>
// 		<Route path={`${match.url}/:articleId`} component={Detail}></Route>
// 	</div>
// 	)
const DetailContainer = function({match}){
	return(
	<div>
		<Route path={`${match.url}/:articleId`} component={HDetail}></Route>
	</div>
		)
}
function mapState(state){
	let id=state.selectedId;
	return {
		title: state.data[id-1].title,
		content: state.data[id-1].content
	}
}

function mapDispatch(dispatch){
	return {
		load(){
			alert("!!!")
		}
	}
}


export default DetailContainer;