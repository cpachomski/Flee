import AppStore from '../store/AppStore';

export default function toggleMap() {

	AppStore.data.mapExpanded = !AppStore.data.mapExpanded
	AppStore.emitChange();
}