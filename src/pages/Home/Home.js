import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import HomeDisplay from './HomeDisplay';

import { GET_ALL_FILMS } from '../../queries/getAllFilms';

class Home extends Component {
  render() {
    const { data: { loading, error, allFilms } } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>I/O error</div>
    }
    return <HomeDisplay films={allFilms.films} />
  }
}

export default graphql(gql(GET_ALL_FILMS))(Home);