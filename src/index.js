import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Components/Redux/ReduxStore";

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
	<App />
		</Provider>
	</HashRouter>
	, document.getElementById('root'));


serviceWorker.unregister();
