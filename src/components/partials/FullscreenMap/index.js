import React, { Component } from 'react'
import mapStyles from '../mapStyles';
import './style.scss';


export default class FullscreenMap extends Component {

	state = {
		zoom: 3
	}

	componentDidMount() {
		this.map = this.createMap()
		this.setMapStyles()
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

	setMapStyles() {
		const mapStyle = new google.maps.StyledMapType(mapStyles);
		this.map.mapTypes.set('styled_map', mapStyle)
		this.map.setMapTypeId('styled_map');
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