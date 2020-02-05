
import  React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import Toggle from './Toggle'
import { composeWithDevTools } from 'redux-devtools-extension'
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(),
);


const App = () => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
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
