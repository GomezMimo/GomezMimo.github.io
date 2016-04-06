(function(){
	window.App = {
		Models: {},
		Views: {},
		Collections:{}
	};	

	//Single Model
	App.Models.Weather = Backbone.Model.extend({});

	//Single View
	App.Views.Weather = Backbone.View.extend({
		tagName: 'ul',
		template: _.template($('#weatherContainer').html()),		
		render: function(){
			var template = this.template(this.model.toJSON());			
			this.$el.append(template);
			$('#button').on('click', function(){
				var city = $('#city').val();
				var CollectionValue = new App.Collections.Weather({city: city});				
			});			
			return this;
		}
	});	

	var myWeather = new App.Models.Weather({		
		city: "",
		country: "",
		sky: "",
		temperature: "",
		wind: "",
		clouds: ""				
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
			updateTemplate(response);
			console.log(response);
		}
	});	
	var myWeatherView = new App.Views.Weather({model: myWeather});
	$('#container').html(myWeatherView.render().el);

	//Gets the data and update it
	var updateTemplate = function(data){
		myWeather.attributes.city = data.name;
		myWeather.attributes.country = data.sys.country;
		myWeather.attributes.sky = data.weather[0].description;
		myWeather.attributes.temperature = (data.main.temp  - 273.15).toFixed(2) + " ºC";
		myWeather.attributes.wind = data.wind.speed + "m/s";
		myWeather.attributes.clouds = data.clouds.all + "%";
		var myWeatherView = new App.Views.Weather({model: myWeather});
		$('#container').html(myWeatherView.render().el);
	}
})();

