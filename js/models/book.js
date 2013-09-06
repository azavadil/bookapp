var app = app || {}; 

app.Book = Backbone.Model.extend({
	defaults: { 
		coverImage: "img/java.png", 
		title: "No title", 
		author: "Unknown", 
		releaseDate: "Unknown", 
		keywords: "None"
	}
}); 

