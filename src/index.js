import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';
import './index.css';
import config from './aws-exports';
import Router from './components/Router';

Amplify.configure(config);

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
