var KEY = "619fd2925e4faf1e88d8aeab7a85a627";


function getCityValue(){
	return $('#city').val();
}

function getWeatherUrl(city){
	var WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + KEY;
	return WEATHER_URL;
}

function getWeather(city){
	$('#container').html("");
	return $.ajax({
		url: getWeatherUrl(getCityValue()),
		method: "GET",
		data:{q: city}		
	}).done(function(data){		
		$('#container').html("<p><span class='property'>City: </span><span class='value'>"+ data.name + "</span></p><p><span class='property'>Country: </span><span class='value'> " + data.sys.country +"</span></p>");		
		$.each(data.weather, function(key, value){
			var html = "<p><span class='property'>Sky: </span><span class='value'>" + value.description + "</span></p>";
			$('#container').append(html);
		});		
		$('#container').append("<p><span class='property'>Temperature: </span><span class='value'>" + (data.main.temp - 273.15).toFixed(2) + " </span>ºC</p><p><span class='property'>Wind: </span><span class='value'>" + data.wind.speed + "</span> m/s</p><p><span class='property'>Clouds: </span><span class='value'>" + data.clouds.all + "</span>%</p>");					
	});
}

$(document).ready(function(){
	$('#button').on('click', function(){				
		getWeather(getCityValue());
	});
});

/*
(function(){	
	var ModelWeather = Backbone.Model.extend({
		initialize: function(){
         console.info("Inicializando el clima socio");
      },
      defaults:{
			KEY: "619fd2925e4faf1e88d8aeab7a85a627"				
		}      
	});

	var weather = new ModelWeather({			
		getCityValue: function(){
			return $('#city').val();
		},

		getWeatherURL: function(){
			
			return "hola mundo";
		}
	});
	
	console.log(weather.KEY);
	console.log(weather.get('KEY'));
	console.log(weather.get(getWeatherURL));
})();


/*
	defaults:{
			weather_url: "http://api.openweathermap.org/data/2.5/weather?q=&appid=619fd2925e4faf1e88d8aeab7a85a627"				
		}	
*/
