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
		document.title = decodeURIComponent((queryValue.charAt(0).toUpperCase() + queryValue.slice(1))) + ' - ' + document.title;
	}

	// 
	// 

	var checkExist = setInterval(function() {
		if ($('#gsc-i-id1').length) {
			$('#gsc-i-id1').focus();
			clearInterval(checkExist); // Stop checking once the element is found
		}
	}, 100); // Check every 100 milliseconds

	// 
	// 
 });