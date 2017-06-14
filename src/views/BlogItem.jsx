import { Link } from 'react-router-dom';
import React from 'react';

export default function BlogItem(props) {
	return (
		<div key={props.id}><Link to={`/detail/${props.id}`}>{props.title}</Link></div>)
}