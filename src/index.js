import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import {  createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';

import { fetch_meme } from './actions';

// adding middleware named THUNK to the store, to handle async operations
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log('store--', store.getState()))

store.dispatch(fetch_meme())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));
