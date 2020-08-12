$('.cc-selector input').on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$('.cc-selector input').css('-webkit-appearance', 'radio')
	}

})
