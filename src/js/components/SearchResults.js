var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = require('./Result');

var SearchResults = React.createClass({
	render: function(){
		if(this.props.searchText !== '') {
			var header = (<h2 className="page-header">Results for {this.props.searchText}</h2>);

			var topics = this.props.topics.map(function(result, index) {
				return (
					<Result result={result} key={index} />
				);
			});
		}

		return(
			<div>
				{header}
				{topics}
			</div>
		);
	},

});

module.exports = SearchResults;