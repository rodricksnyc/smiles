jQuery(document).ready(function ($) {

$('.cc-selector input').on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$('.cc-selector input').css('-webkit-appearance', 'radio')
	}

})


$("#Q4").on('keyup', function (event) {

		var currentString = $("#Q4").val();
		$("#div1").html(currentString.length);
		if (currentString.length <= 3000) {  /*or whatever your number is*/
				var intVal = 3000 - currentString.length;
				$("#div1").html("(" + intVal + " characters left)" );
		} else {
				//do some different stuff with your div
		}
});

})
