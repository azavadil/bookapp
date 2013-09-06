var app = app || {}; 

app.BookView = Backbone.View.extend({
	tagname: "div", 
	className: "bookContainer", 
	template: $("#bookTemplate").html(), 
	
	
	events: { 
		"click .delete": "deleteBook"
	}, 
	
	deleteBook: function(){ 
		this.model.destroy(); 
		
		this.remove(); 
	}, 
	
	render: function(){
		
		//tmpl is a function that takes a JSON object and returns html
		var tmpl = _.template( this.template ); 
		
		// this.el is what we defined in tagName (i.e. div)
		// use $el to get access to jQuery html() function
		this.$el.html( tmpl( this.model.toJSON() )); 
		
		return this; 
	}
})