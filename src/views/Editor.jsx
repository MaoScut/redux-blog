import React from 'react';

export default class Editor extends React.Component {
	saveClick(){
		let item = {};
		item.title= this.refs.title.value;
		item.content= this.refs.content.value;
		debugger;
		this.props.onSave(item);
	}
	cancelClick(){

	}
	render(){
		return(
			<div>
			<input ref='title' type="text"/>
			<textarea ref='content' cols="30" rows="10"></textarea>
			<button onClick={this.saveClick.bind(this)}>save</button>
			<button></button>
			</div>
			)
	}
}