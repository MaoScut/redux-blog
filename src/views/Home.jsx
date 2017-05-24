import React, {Component} from 'react';
import {entry} from '../actions';
import {connect} from 'react-redux';

class Home extends Component {

	render(){	
		var content='loading';
		if(this.props.data.length>0) content=this.props.data.map(v=>(<h3>{v.title}</h3>));
		return (
			<div>
			<h1>Home!!!</h1>
			{content}
			</div>
			);
	}
	componentDidMount(){
		debugger;
		this.props.load();
	}
}

function mapState(state){
	return {
		data: state.data
	}
}

function mapDispatch(dispatch){
	return {
		load(){
			dispatch(entry())
		}
	}
}

export default connect(mapState, mapDispatch)(Home);