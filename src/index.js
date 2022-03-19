import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import React from 'react';

import store from "./redux/redux-store";
import App from './components/app/App';

import './index.css';


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>, document.getElementById('root'));



