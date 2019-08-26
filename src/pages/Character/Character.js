import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import CharacterDisplay from './CharacterDisplay';

import { GET_PERSON_BY_ID } from '../../queries/getPersonById';

class Character extends Component {
  render() {
    const { data: { loading, error, person } } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>I/O error</div>
    }
    return <CharacterDisplay character={person}/>
  }
}

export default graphql(gql(GET_PERSON_BY_ID), {
  options: props => {
    return ({ variables: { id: props.match.params.id }})
  }
})(Character);
