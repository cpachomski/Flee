import React, { Component } from 'react'

import Logo from '../../partials/Logo'
import TopMap from '../../partials/TopMap'
import ArticleItem from '../../partials/ArticleItem'

import './style.scss'

export default class Articles extends Component {

	componentWillMount() {
		//get the list of articles 
	}

	panToArticleCoords() {
		console.log('pan to coords')
	}

	render() {
		const { articles } = this.props.data
		const currentCoords = {
			lat: 45.918868,
			lng: -123.975672
		}

		return (
			<div className='articles'>
				<TopMap currentCoords={ currentCoords } />
				<div className='article-list'>
					<h1>Articles</h1>
				{ articles.map((article) => {
					return (
						<ArticleItem key={ article._id } data={ article } onMouseOver={ this.panToArticleCoords } />
					)
				})}
				</div>
			</div>
		)
	}
}