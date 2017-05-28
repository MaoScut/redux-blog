import React, {Component} from 'react';
import {select,entry} from '../actions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import Editor from './Editor';

class Home extends Component {

	render(){	
		var content='loading';
		if(this.props.data.length>0) content=this.props.data.map(v=>(<div key={v.id}><Link to={`/detail/${v.id}`} >{v.title}</Link></div>));
		return (
			<div>
				<h1>Home</h1>
				{content}
				<Editor onSave={this.props.actions.saveEntry} />
			</div>
			);
	}
	componentDidMount(){
		debugger;
		this.props.actions.fetchEntryList();
		// this.props.actions.saveEntry({
		// 	title: 'test',
		// 	content: 'test!!!!!'
		// })
	}
}

// function mapState(state){
// 	debugger;
// 	return {
// 		data: state.data
// 	}
// }

// function mapDispatch(dispatch){
// 	return {
// 		load(){
// 			dispatch(entry())
// 		},
// 		change(id){
// 			dispatch(select(id))
// 		}
// 	}
// }

export default connect(
	state=>({
		data: state.data
	}), 
	dispatch=>({
		actions: bindActionCreators(actionCreators, dispatch)
	})
)(Home);