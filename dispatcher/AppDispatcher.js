import { Dispatcher } from 'flux'
import { getInitialStore } from '../actions'

const AppDispatcher = new Dispatcher();

AppDispatcher.register((payload) => {
	let action = payload.action

	switch(action) {
		case 'get-initial-store':
			getInitialStore()
			break

		default
			return true
	}

	return true
})

export default AppDispatcher