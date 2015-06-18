impart {TaskCollection} from './task';

export default Backbone.Model.extend({
	
	initialize: function() {
		this.tasks = new TaskCollection();
	},
	
	
})