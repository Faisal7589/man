import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app'
import Store from './components/pages/Projects/redux/store';


ReactDOM.render(
  <React.StrictMode>

      <Provider store={Store}>
        <App />
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
