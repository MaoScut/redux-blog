import React from 'react';
import Nav from './Nav';

export default class extends React.Component {
	render(){
		return(
			<div className="frame">
				<section className="header">
					<Nav></Nav>
				</section>
				<section className="container">
					{this.props.children}
				</section>
			</div>
			)
	}
}