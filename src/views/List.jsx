//a list component whose children can be re defined!
import React from 'react';

export default function List (childComponent){
	return function({data, childClick}){
		let children = data.map(v=>childComponent(v));
		let click = function(e){
			if(childClick) childClick(e.target.getAttribute('data-key'));
		}
		return (
		<div onClick = {click}>
			{children}
		</div>)
	}
}
