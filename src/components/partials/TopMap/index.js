import React, { Component } from 'react'
import mapStyles from '../mapStyles'

import './style.scss'

export default class FullscreenMap extends Component {

	state = {
		zoom: 7
	}

	componentDidMount() {
		this.map = this.createMap()
		this.setMapStyles()
		this.setMarkers()
		google.maps.event.addListener(this.map, 'zoom_changed', () => { this.handleZoomChange() })
	}

	componentDidUnMount() {
		google.maps.event.clearListener(this.map, 'zoom_changed')
	}

	createMap() {
		let mapOptions = {
			zoom: this.state.zoom,
			center: this.mapCenter(),
			disableDoubleClickZoom: true,
			mapTypeControlOptions: {
				mapTypeIds: ['styled_map']
			}
		}

		return new google.maps.Map(this.refs.topMap, mapOptions)
	}

	setMarkers() {
		console.log('set markers')
	}

	setMapStyles() {
		const mapStyle = new google.maps.StyledMapType(mapStyles);
		this.map.mapTypes.set('styled_map', mapStyle)
		this.map.setMapTypeId('styled_map')
	}

	mapCenter() {
		const { currentCoords } = this.props

		return new google.maps.LatLng(
			currentCoords.lat,
			currentCoords.lng
		)			
	}

	handleZoomChange() {
		this.setState({
			zoom: this.map.getZoom()
		})
	}

	render() {
		const { data } = this.props

		return (
			<div className='top-map'>
				<div className='map' ref='topMap'></div>
			</div>
		)
	}
}