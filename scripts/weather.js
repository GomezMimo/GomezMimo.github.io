(function(){
	window.App = {
		Models: {},
		Views: {},
		Collections:{}
	},

	window.template = function(id){
		return _.template($('#' + id ).html());
	}

	//Single Model
	App.Models.Weather = Backbone.Model.extend({});

	//Single View
	App.Views.Weather = Backbone.View.extend({
		tagName: 'p',
		template: template('weatherContainer'),		
		render: function(){
			var template = this.template(this.model.toJSON());			
			this.$el.append(template);
			$('#button').on('click', function(){
				var city = $('#city').val();
				var CollectionValue = new App.Collections.Weather({city: city});
				//var setData = new App.Views.setData({collection: CollectionValue});
				//setData.render();
			});			
			return this;
		}
	});	

	var myWeather = new App.Models.Weather({		
		city: "Bogota",
		country: "Colombia",
		sky: "Broken clouds",
		temperature: "34 ºc",
		wind: "10 m/s",
		clouds: "clouds"				
	});


	//Collection
	App.Collections.Weather = Backbone.Collection.extend({
		url: function(){
			var link = "http://api.openweathermap.org/data/2.5/weather?q="+ this.city +"&appid=619fd2925e4faf1e88d8aeab7a85a627";
			return link;
		},		
		initialize: function(options){
			this.city = options.city;
			this.data = this.fetch();
			//console.log(this.response);			
			console.log(this.data);
		},
		parse: function(response){
			var response = response;
			console.log(response);						
			return response;
		}
	});
	
	var myWeatherView = new App.Views.Weather({model: myWeather});
	$('#container').append(myWeatherView.render().el);
})();