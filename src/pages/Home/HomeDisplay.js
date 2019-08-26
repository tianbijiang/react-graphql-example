import React from 'react';
import { Link } from 'react-router-dom'

import Nav from '../../components/Nav/Nav';

import './HomeDisplay.css';

export default ({ films }) => {
  return (
    <div className="container">
      <Nav navTitle="All Films" />
				{films.map(film => (
          <div key={film.id} className="film__container">
            <Link to={`/film/${film.id}`} className="film__title">{film.title}</Link>
            <div className="film__info">
              <div className="info">Directed by: {film.director}</div>
							<div className="info">Release date: {film.releaseDate}</div>
              <p>{film.openingCrawl}</p>
            </div>
          </div>
				))}
    </div>
  )
}