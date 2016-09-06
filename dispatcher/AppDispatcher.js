import { Dispatcher } from 'flux'
import { getInitialStore, toggleMap } from '../actions'

const AppDispatcher = new Dispatcher();

AppDispatcher.register((payload) => {
	let action = payload.action

	switch(action) {
		case 'get-initial-store':
			getInitialStore()
			break

		case 'toggle-map';
			toggleMap();
			break

		default
			return true
	}

	return true
})

export default AppDispatcher