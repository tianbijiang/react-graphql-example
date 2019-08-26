import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/starwars_yellow_logo.svg';

import './Header.css';

export default () => (
  <div className="header">
		<Link to="/"><img src={logo} className="header__logo" alt="logo" /></Link>
  </div>
)

