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


$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')
	}

})
$("a, button, input, [tabIndex='0']").on('focusout', function() {
	$(this).css('outline', 'none')
})


//toaster

$('#submit').click(function (e) {

    e.preventDefault()

    setTimeout(function () {
      $('.toast').css('right', '0px')
      $('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
    }, 300)

    setTimeout(function () {
      $('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
      $('.toast').addClass('transparent-opacity');
      $('.toast').removeClass('animated slideOutRight')

    }, 5000)
    setTimeout(function () {
      $('.toast').css('right', '-400px')
      $('.toast').addClass('animated slideOutRight')
    }, 4900)



});


})
