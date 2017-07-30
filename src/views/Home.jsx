import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import Editor from './Editor';
import {select, entry} from '../actions';
import List from './List';
import BlogItem from './BlogItem';

// customized a BlogList
let BlogList = List(BlogItem);
let test = function(id){
	console.log(id);
}

class Home extends Component {
	render(){	
			return (
			<div>
				<BlogList data={this.props.data} />
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