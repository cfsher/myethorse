// Application entrypoint.

// Load up the application styles
//import './index.css';
import './assets/css/index.css';


// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();