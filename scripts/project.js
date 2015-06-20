import {TaskCollection} from './task';

export default Backbone.Model.extend({
	
	initialize: function() {
		this.tasks = new TaskCollection();
		this.listenTo(this.tasks, 'all', this.trigger.bind(this));
	},
	add: function(models, options){
		this.tasks.add(models, options);
	},
	remove: function(models, options){
		this.tasks.remove(models, options);
	},
	toJSON: function(){
		
	}
})