import config from '../config'
import Cosmic from 'cosmicjs'
import _ from 'lodash'
import AppStore from '../store/AppStore'

export default function getInitialStore(cb) {

	Cosmic.getObjects(config, (err, res) => {
		const objects = res.objects
		const articles = objects.type.articles
		const trips = objects.type.trips
		const sidebar = objects.type['sidebar-contents'][0]

		AppStore.data.articles = articles
		AppStore.data.trips = trips
		AppStore.data.sidebar = sidebar

		AppStore.data.mapExpanded = false;

		AppStore.data.ready = true
		AppStore.emitChange()


		//server callback
		if (cb) {
			cb(false, AppStore)
		}

	})
}