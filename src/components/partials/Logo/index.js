import React, { Component } from 'react'
import './style.scss'

export default class Logo extends Component {
	render() {
		const { data } = this.props
		const logoClass = data.mapExpanded ? 'logo-container centered' : 'logo-container'

		return (
			<div className={ logoClass }>
				<h1>Flee</h1>
			</div>
		)
	}
}