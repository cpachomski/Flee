import React, { Component } from 'react'

import FullscreenMap from '../../partials/FullscreenMap'
import Logo from '../../partials/Logo'

export default class Landing extends Component {

	render() {
		const { data } = this.props;
		const initialCenter = { lng: -90.1056957, lat: 29.9717272 }

		return (
			<div>
				<Logo />
				<FullscreenMap data={ data } initialCenter={ initialCenter }/>
			</div>
		)
	}
}