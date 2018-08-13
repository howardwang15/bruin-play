import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(rootReducer, {})}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
