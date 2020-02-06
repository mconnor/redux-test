import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import Toggle from './toggle/Toggle';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import logo from './logo.svg';
import './App.css';

const middleware = [ logger, thunk ];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/">
                        <h1 className="App-logo"><span>&#127775;</span>Mike's Movie Data Base <span>&#127775;</span></h1>
					</Link>
				</header>
				<Toggle />
				<Switch>
					<Route exact path="/" component={MoviesList} />
					<Route path="/:id" component={MovieDetail} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
