import React, { Component } from 'react'
import mapStyles from '../mapStyles'
import './style.scss'


export default class FullscreenMap extends Component {

	state = {
		zoom: 3
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
			scrollwheel: false,
			mapTypeControlOptions: {
				mapTypeIds: ['styled_map']
			}
		}

		return new google.maps.Map(this.refs.fullscreenMap, mapOptions)
	}

	setMarkers() {
		const { tripCoords } = this.props.data

		tripCoords.forEach((coord) => {
			let latLng = new google.maps.LatLng(coord[0], coord[1])
			console.log(latLng)
			let marker = new google.maps.Marker({ position: latLng })

			marker.setMap(this.map)
		})
	}

	setMapStyles() {
		const mapStyle = new google.maps.StyledMapType(mapStyles);
		this.map.mapTypes.set('styled_map', mapStyle)
		this.map.setMapTypeId('styled_map')
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
		const { data } = this.props
		const mapClass = data.mapExpanded ? 'fullscreen-map-container expanded' : 'fullscreen-map-container'

		return (
			<div className={ mapClass }>
				<div className='map' ref='fullscreenMap'></div>
			</div>
		)
	}
}