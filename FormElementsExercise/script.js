$(document).ready(function) {
	
	$("input[name=num]").on("focus", function) {

		alert("must be over level 9000");

	});

	$("input[name=num]").on("blur", function(){

		var check = $(this)[0].checkValidity();

		$(this)[0].setCustomValidity("Use a complete url http://myurl.com");

		if (check == false){
				$(this).after($(this)[0].validationMessage);
		}

	});

	$("sumbit").on("click", function(){

		var name = $("input[name=name]").val();

		$("submit").after(name);

		});

	$("input[name=other]").on("keydown"), function(event){

		if(event.which == 13){

			$("#submit").click();
		}

	});


});