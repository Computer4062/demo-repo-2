document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("button").addEventListener("click", function(){
		window.location.href = "https://" + document.querySelector("input").value;
	});
});