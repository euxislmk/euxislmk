 $(document).ready(function() {
 	// Function to get query parameters
 	function getQueryParam(param) {
 		const urlParams = new URLSearchParams(window.location.search);
 		return urlParams.get(param);
 	}

 	// Get the value of the 'q' parameter
 	const queryValue = getQueryParam('q');

 	// If the 'q' parameter exists and has a value
 	if (queryValue) {
 		// Prepend the unencoded value to the document title
 		document.title = decodeURIComponent(queryValue) + ' - ' + document.title;
 	}
 });