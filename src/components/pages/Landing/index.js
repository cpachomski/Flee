import React, { Component } from 'react'
import { Link } from 'react-router';

import FullscreenMap from '../../partials/FullscreenMap'
import Logo from '../../partials/Logo'
import Nav from '../../partials/Nav';

export default class Landing extends Component {

	componentWillMount() {
		this.setState({
			expandedMap: false
		})
	}

	toggleExpandedMap() {
		this.setState({
			expandedMap: !this.state.expandedMap
		})
	}

	render() {
		const { data } = this.props;
		const initialCenter = { lng: -90.1056957, lat: 29.9717272 }		
		const toggleClass = this.state.expandedMap ? 'map-toggle hidden' : 'map-toggle visible'

		return (
			<div>
				<Logo centered={ this.state.expandedMap } />
				<FullscreenMap expanded={ this.state.expandedMap } data={ data } initialCenter={ initialCenter }/>

				<div className={ toggleClass }></div>
				<Nav open={ !this.state.expandedMap } />
			</div>
		)
	}
}