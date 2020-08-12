/**
 * IMPORTS
 */
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Home} from './pages/home.js'; 
import {Welcome} from './pages/welcome.js'; 
import {store} from './store.js';


/**
 * STYLES
 */
import './App.css';


/**
 * CODE
 */
function App() {
  return (
    <div className="App">
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Redirect path="/authorized" to="/home" />
					<Route path="/" exact component={Welcome} />
					<Route path="/home" component={Home} />
				</Switch>
			</BrowserRouter>
		</Provider>
    </div>
  );
}


/**
 * EXPORTS
 */
export default App;
