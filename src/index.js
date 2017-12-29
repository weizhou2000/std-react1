import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter as Router,Route,Link} from 'react-router-dom'

import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://etoles.meridian-mkt.cn/etoles/do' }),
  cache: new InMemoryCache()
});

/*
client.query({
  query: gql`query{user(token:"1"){orders{id}}}`
})
.then(data => console.log(data))
.catch(error => console.error(error));
*/

const App1=() => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(<ApolloProvider client={client}>
    <App1/>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
