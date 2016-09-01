import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/pages/Landing'
import Trips from './components/pages/Trips'
import Articles from './components/pages/Articles'
import FourOhFour from './components/pages/FourOhFour'


export default (
	<Route path='/' component={ App }>
		<IndexRoute component={ Landing } />
		<Route path='trips' component={ Trips } />
		<Route path='articles' component={ Articles } />
		<Route path='*' component={ FourOhFour } />
	</Route>
)

