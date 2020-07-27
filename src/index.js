import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routers';
import store from './store';
import { Provider } from 'react-redux'
import { Auth0Provider } from './contexts/auth0-context';

ReactDOM.render(
	<Provider store={store}>
		<Auth0Provider>
			<Routing />
		</Auth0Provider>
	</Provider>,
	document.getElementById('root')
);
