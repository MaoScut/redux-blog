import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes=()=>(
	<BrowserRouter>
		<div>
			<Route path="/detail/:articleId" component={Detail} />
			<Route exact path="/" component={Home} />	
		</div>
	</BrowserRouter>
	);
export default routes;