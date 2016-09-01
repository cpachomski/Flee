import React, { Component } from 'react'
import './style.scss';

export default class FullscreenMap extends Component {

	state = {
		zoom: 3
	}

	componentDidMount() {
		this.map = this.createMap()
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
			scrollwheel: false
		}

		return new google.maps.Map(this.refs.fullscreenMap, mapOptions)
	}

	mapCenter() {
		const { initialCenter } = this.props

		return new google.maps.LatLng(
			initialCenter.lat,
			initialCenter.lng
		)			
	}

	handleZoomChange() {
		this.setState({
			zoom: this.map.getZoom()
		})
	}

	render() {
		return (
			<div className='fullscreen-map-container'>
				<div className='map' ref='fullscreenMap'></div>
			</div>
		)
	}
}