import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import App from './views/App';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app'),
);
