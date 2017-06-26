var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchText: function(search) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_TEXT,
			search: search
		});
	},
	receiveResults: function(topics) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_RESULTS,
			topics: topics
		});
	}
}

module.exports = AppActions;