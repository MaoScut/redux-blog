import React from 'react';

export default function ListItem (singleData){
	return (
		<li data-key={singleData.id} key={singleData.id}>{singleData.title}</li>)
}