import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import songsMiddleware from './sagas/songs';

const sagaMiddleware = createSagaMiddleware();
const root = (
    <Provider store={createStore(rootReducer, applyMiddleware(sagaMiddleware))}>
        <App />
    </Provider>
)
sagaMiddleware.run(songsMiddleware);

ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
