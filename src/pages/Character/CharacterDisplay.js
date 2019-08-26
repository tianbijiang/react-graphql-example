import React from 'react';
import { Link } from 'react-router-dom'

import Nav from '../../components/Nav/Nav';

import './CharacterDisplay.css';

export default ({ character }) => (
	<div className="container">
		<Nav navTitle={character.name} />
		<div className="info">
			Gender: <span>{character.gender}</span>
		</div>
		<div className="info">
			Birth year: <span>{character.birthYear}</span>
		</div>
		<div className="info">
			Home world: <span>{character.homeworld.name}</span>
		</div>
		<div className="section">
			<h3>Films</h3>
			<div className="section__container">
				{
					character.filmConnection.films.map(film => (
						<Link to={`/film/${film.id}`} key={film.id} className="section__item">{film.title}</Link>
					))
				}
			</div>
		</div>
	</div>

)