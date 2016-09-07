import React, { Component } from 'react'

import TopMap from '../../partials/TopMap'

export default class Articles extends Component {

	componentWillMount() {
		//get the list of articles 
		this.getArticles()
	}

	getArticles() {
		const { data } = this.props
		console.log(data)
	}

	render() {
		const currentCoords = {
			lat: 45.918868,
			lng: -123.975672
		}

		return (
			<div className='articles'>
				<TopMap currentCoords={ currentCoords } />
				<div className='article-list'>
				</div>
			</div>
		)
	}
}