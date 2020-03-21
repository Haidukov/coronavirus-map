import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
