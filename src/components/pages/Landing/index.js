import React, { Component } from 'react'
import { Link } from 'react-router'
import { toggleMap } from '../../../../actions'


import FullscreenMap from '../../partials/FullscreenMap'
import Logo from '../../partials/Logo'
import Nav from '../../partials/Nav';

import './style.scss';

export default class Landing extends Component {

	render() {
		const { data } = this.props;
		console.log(data);
		const initialCenter = { lng: -90.1056957, lat: 29.9717272 }		
		const buttonClass = data.mapExpanded ? 'map-toggle hidden' : 'map-toggle visible'


		return (
			<div>
				<Logo />
				<FullscreenMap data={ data } initialCenter={ initialCenter }/>
				<button className={ buttonClass } onClick={() => { toggleMap() }}>Expand Map</button>
				<Nav data= { data } />
			</div>
		)
	}
}