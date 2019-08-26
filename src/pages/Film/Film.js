import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FilmDisplay from './FilmDisplay';

import { GET_FILM_BY_ID } from '../../queries/getFilmById';

class Film extends Component {
  render() {
    const { data: { loading, error, film } } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>I/O error</div>
    }
    return <FilmDisplay film={film} />
  }
}

export default graphql(gql(GET_FILM_BY_ID), {
  options: props => {
    return ({ variables: { id: props.match.params.id }})
  }
})(Film);
