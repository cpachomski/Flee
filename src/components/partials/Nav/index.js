import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.scss';

export default class Nav extends Component {
	render() {
		return (
			<nav className='side-nav'>
				<Link to='/'>Home</Link>
				<Link to='trips'>Trips</Link>
				<Link to='articles'>Articles</Link>
				<Link to='about'>About</Link>
			</nav>
		)
	}
}