import React, {Component} from 'react';
import {select,entry} from '../actions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import Editor from './Editor';

// class Home extends Component {

// 	render(){	
// 		var content='loading';
// 		if(this.props.data.length>0) content=this.props.data.map(v=>(<div key={v.id}><Link to={`/detail/${v.id}`} >{v.title}</Link></div>));
// 		return (
// 			<div>
// 				<h1>Home</h1>
// 				{content}
// 				<Editor onSave={this.props.actions.saveEntry} />
// 			</div>
// 			);
// 	}
// 	componentDidMount(){
// 		this.props.actions.fetchEntryList();
// 	}
// }

// export default connect(
// 	state=>({
// 		data: state.data
// 	}), 
// 	dispatch=>({
// 		actions: bindActionCreators(actionCreators, dispatch)
// 	})
// )(Home);

import List from './List';
//import ListItem from './ListItem';
import ListItem from './BlogItem';

debugger;
let NewList = List(ListItem);
let test = function(id){
	console.log(id);
}
class Home extends Component {

	render(){	
		debugger;
			return (<div>
				{NewList({
					data: this.props.data,
				})}
			</div>
			);
	}
	componentDidMount(){
		this.props.actions.fetchEntryList();
	}
}

export default connect(
	state=>({
		data: state.data
	}), 
	dispatch=>({
		actions: bindActionCreators(actionCreators, dispatch)
	})
	)(Home);
//export default List(childProps, ListItem);