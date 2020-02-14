
function thema() {
	let color = $('#color>option:selected').text();

	if (color == "Светлая тема ") {
		$('body').css('background','White');
		$('body').css('color','DimGrey');
		$('body').css('font-family','Oswald');
	}
	else if(color == "Тёмная тема"){
		$('body').css('background','DarkSlateGrey');
		$('body').css('color','DarkOrange');
		$('body').css('font-family','Russo One');
	}
	else if (color == "...") {
		$('body').css('background','Honeydew');
		$('body').css('color','aqua');
		$('body').css('font-family','Pacifico');
	}
}