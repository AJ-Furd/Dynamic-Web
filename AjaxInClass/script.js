$(document).ready(function(){

var xhr = new XMLHttpRequest();

xhr.onload = function() {

var jsonResponse = JSON.parse(xhr.responseText);

console.log(jsonResponse);

for (var i = 0; i < jsonResponse.events.length; i++){
		console.log(jsonResponse.events[i].location);

		output = "<img src='" + jsonResponse.events[i].map + "'>";
		output += "<p>" + jsonResponse.events[i].location + "</p>"

		console.log(jsonResponse.events[i].date);
		console.log(jsonResponse.events[i].map);

		
		$("#content").append(output);


	}

}

xhr.open("GET", "data/data.json", true);
xhr.send(null);
	});