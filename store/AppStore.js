import { EventEmitter } from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {

	data: {
		ready: false,
		globals: {},
		item_num: 5
	},

	emitChange: function() {
		console.log('▂▃▅▇█▓▒░۩۞۩  STORE   ۩۞۩░▒▓█▇▅▃▂', this.data)
		this.emit('change')
	},

	addChangeListener: function(cb) {
		this.on('change', cb)
	},

	removeChangeListener: function(cb) {
		this.removeListener('change', cb)
	}
})