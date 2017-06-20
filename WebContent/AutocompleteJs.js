

function ajaxFunction(){
	var ajaxRequest;  // The variable that makes Ajax possible!
	var search = document.getElementById("mySearch").value;
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			document.getElementById("demo").innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET", "AutocompletionServlet?search=" + search, true);
	ajaxRequest.send(null);
}