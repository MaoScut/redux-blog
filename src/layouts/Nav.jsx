import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
	render(){
		return(
			<nav>
				<Link to="/home">Home</Link>
			</nav>)
	}
}