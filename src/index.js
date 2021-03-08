import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


import { Provider } from 'react-redux';
import store from './app/store';

// const Index = () => <div><App /></div>;

ReactDom.render(
    < Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('index'));