import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';
import Character from './pages/Character/Character';

import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Route path="/" component={Header} />
            <Switch>
              <Route path="/film/:id" component={Film} />
              <Route path="/character/:id" component={Character} />
              <Route path="/" component={Home} />
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/',
  }),
  cache: new InMemoryCache()
});

export default App;
