var Task = Backbone.Model.extend({
	defaults:function(){
	return {
		isComplete: false,
		name:''
	};
	},
	toJSON: function(){
		return _.omit(this.attributes, 'objectId');
	}
});

var TaskCollection = Backbone.Collection.extend({
	model:Task,
	idAttribute: 'objectId',
	url:"htp://api.parse.com/1/classes/TODO",
	
	parse: function(response) {
		return response.results;
	}
});

export default {Task, TaskCollection};