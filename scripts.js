$(document).ready(function() {
	
	//Get stored data
	$.getJSON("data.json", function (dataObjects) {
        main(dataObjects);
    });
});


function main(dataObjects){

	function addAll() {

		$("#gallery").empty();

		dataObjects.forEach(function(data) {

			//create containing div element
			var $div = $("<div>");
			$div.addClass("node");

			var $img = $("<img>");
			$img.attr("src", data.image);

			var $firstname = $("<h1>");
			$firstname.addClass("firstname");
			$firstname.html(data.firstname);

			var $location = $("<h2>");
			$location.addClass("location");
			$location.html(data.location);

			//create new h1 element with class and contentscf
			var $title = $("<h2>");
			$title.addClass("title");
			$title.html(data.title);

			//create new p element with class and contents
			var $quote = $("<p>");
			$quote.addClass("userquote");
			$quote.html(data.quote);


			$div.append($img);
			$div.append($firstname);
			$div.append($location);
			$div.append($title);
			$div.append($quote);

			$("#gallery").append($div);

		});
		$("#gallery").append("<div class='clearfix'></div>");

	}
	
	//run addAll function when page first loads (above)
	addAll();

	//$("#submit").on("click", function(e) {
	//	e.preventDefault();
//
		//grab values from form
//		var nodeTitle = $("input[name=title]").val();
//		var nodeQuote = $("input[name=quote]").val();

//		console.log(nodeTitle);
//		console.log(nodeQuote);

//		function node(title, quote) {
//			this.title = title,
//			this.quote = quote
//		}

		//var newNode = new node(nodeTitle, nodeQuote);

	//	$.post("addData", newNode, function (result) {
           
$("#form").submit(function(e) {
		e.preventDefault();
		
		var formObj = $(this);
	    var formURL = formObj.attr("action");
	    var formData = new FormData(this);

            $.ajax({
            	url: formURL,
            	type:'POST',
            	data: formData,
            	mimeType: "multipart/form-data",
            	contentType: false,
	    		dataType: "json",
	       	 	cache: false,
	        	processData:false,
	    		success: function(result){
            

            	console.log(result);

            //Add new image to client-side array of objects
           		 dataObjects.push(result);

            //update the DOM
           		 addAll();
			
			//fade out dialogue
				$("#overlay").click();
		}
        });

	}); // end of submit

	//submit form if user hits enter
	$("input[name=quote]").on("keydown", function(event) {
		// check for keycode 13 (the enter key)
		if (event.which == 13){
			$("#submit").click();
		}
	});

	$ ("#download").on("click" , function(e) {
	e.preventDefault();
	var dataDownload =
		"text/json;charsetutf-8,"
		+ encodeURIComponent (JSON.stringify(dataObjects));
		$("#download").attr("href", "data:" + dataDownload);
		window.location = document.getElementById('download').href
});
	
}

$("#add").on("click", function(e) {
	e.preventDefault();
	$("#modal").fadeIn();
	$("#overlay").fadeIn();
});

$("#overlay").on("click", function() {
	$("#modal").fadeOut();
	$(this).fadeOut();
});


