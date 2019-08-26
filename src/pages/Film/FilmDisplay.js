import React from 'react';
import { Link } from 'react-router-dom'

import Nav from '../../components/Nav/Nav';

import './FilmDisplay.css';

export default ({ film }) => (
  <div className="container">
    <Nav navTitle={film.title} />
    <div key={film.id}>
      <div className="info">Directed by: <span>{film.director}</span></div>
      <div className="info">Release date: <span>{film.releaseDate}</span></div>
      <p>{film.openingCrawl}</p>
    </div>
    <div className="section">
      <h3>Character List</h3>
      <div className="section__container">
			{
				film.characterConnection.characters.map(character => (
          <Link to={`/character/${character.id}`} key={character.id} className="section__item">{character.name}</Link>
				))
			}
      </div>
    </div>
  </div>
)