import React, { Component } from 'react'
import AppStore from '../../store/AppStore'
import { getInitialStore } from '../../actions'

export default class App extends Component {

	componentWillMount() {
		AppStore.addChangeListener(this.onChange.bind(this))
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this.onChange.bind(this))
	}

	onChange() {
		this.setState({ AppStore })
	}

	getStore() {
		AppDispatcher.dispatch({
			action: 'get-initial-store'
		})
	}

	render() {
		const { data } = AppStore;

		if(!data.ready) {

			if (typeof window !== 'undefined') {

				document.body.className = '';
				getInitialStore()
				
				return (
					<div>
						<h1> Loading... </h1>
					</div>
				)
			}
		}

		const page = React.cloneElement(this.props.children, { data: data });

		return (
			<div className='container'>
				{ page }
			</div>
		)
	}
}