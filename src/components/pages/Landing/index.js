import React, { Component } from 'react'
import { Link } from 'react-router'
import MdMenu from 'react-icons/lib/md/menu'
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
				<Logo data={ data } />
				<MdMenu className='menu-button' onClick={() => {toggleMap()} } />
				<FullscreenMap data={ data } initialCenter={ initialCenter }/>
				<button className={ buttonClass } onClick={() => { toggleMap() }}>Fullscreen Map</button>
				<Nav data={ data }  />
			</div>
		)
	}
}