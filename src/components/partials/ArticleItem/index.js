import React, { Component } from 'react'

import monthNames from '../monthNames'
import dayNames from '../dayNames'

import './style.scss';

export default class ArticleItem extends Component {
	render() {
		const { data } = this.props
		const title = data.title
		const blurb = data.metafield['blurb'].value
		const date = new Date(data.created_at)
		const month = monthNames[date.getMonth()]
		const day = dayNames[date.getDay()]
		const year = date.getFullYear()


		console.log( data )
		return (
			<div className='article-item'>
				<h3 className='article-title'>{ title } <span>{ month } { day }, { year } </span></h3>
				<h4 className='article-blurb'>{ blurb }</h4>
			</div>
		)
	}
}