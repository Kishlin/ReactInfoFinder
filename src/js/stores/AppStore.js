var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _topics = [];
var _searchText = '';

var AppStore = assign({}, EventEmitter.prototype, {
	setSearchText: function(search) {
		_searchText = search.text;
	},
	setTopics: function(topics) {
		_topics = topics;
	},
	getSearchText: function() {
		return _searchText;
	},
	getTopics: function() {
		return _topics;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SEARCH_TEXT:
			// Api Call
			AppAPI.searchText(action.search);

			// Store Save
			AppStore.setSearchText(action.search),

			// Emit Change
			AppStore.emitChange();
			break;
		case AppConstants.RECEIVE_RESULTS:
			// Store Save
			AppStore.setTopics(action.topics),

			// Emit Change
			AppStore.emitChange();
			break;
	}

	return true;
});

module.exports = AppStore;