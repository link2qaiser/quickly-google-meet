$(document).ready(function (){
	var url = window.location.href;

	if (url.indexOf("meet.google.com") > -1) {
		var start = setInterval(searchAndCopy, 1000);
	}
	function searchAndCopy() {
		if (document.querySelector(".xTGfdf")) {
			clearInterval(start);
			copyToClipboard(window.location.href);
		}
	}
	function copyToClipboard(text) {
	    var dummy = document.createElement("textarea");
	    document.body.appendChild(dummy);
	    dummy.value = text;
	    dummy.select();
	    document.execCommand("copy");
	    document.body.removeChild(dummy);
	}
});