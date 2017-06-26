var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = React.createClass({
	render: function(){
		var result = this.props.result;
		return(
			<div>
				<p className="content lead" dangerouslySetInnerHTML={{__html: result.Result}}></p>
			</div>
		);
	},

});

module.exports = Result;