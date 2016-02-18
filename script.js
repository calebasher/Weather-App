$(document).ready(function(){

	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=c8476878f227b0e4f347c71b636cde01&units=imperial", function(json) {
		$('#tempfield').html(json.main.temp);
		$('#city').html(json.name);

		var weather = json.weather[0].description;
		var upCasedWeather = weather.charAt(0).toUpperCase() + weather.slice(1);
		$('#weather').html(upCasedWeather);

		var icon = (json.weather[0].icon);
		$('#weatherIcon').attr("src","http://openweathermap.org/img/w/"+icon+".png");

		var temp = JSON.stringify(json.main.temp);
			
				var toggleState = true;
				$('#changeTemp').on("click", function() {
				  if(toggleState) {
				    $('#tempfield').html(Math.round((temp - 32) * (5/9)));
					$('#changeTemp').html("Fahrenheit");
				  } 
				  else {
				    $('#tempfield').html(Math.round(temp));
					$('#changeTemp').html("Celsius");
				  }
				  toggleState = !toggleState;
				});			
		});
  });
}	
});