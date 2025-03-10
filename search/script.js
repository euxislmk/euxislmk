////////////

function shareButton() {

	$('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">')

	// req CSS font-awesome

	$('body').append(' <button id="shareButton"><i class="fas fa-share-alt"></i></button> <div id="fallbackMenu"> <button id="closeButton">X</button> <i class="fas fa-envelope-square"></i> <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-whatsapp"></i>   </div> ');

	var a = 'position: fixed; bottom: 25px; right: 25px;';
	var b = 'bottom: 70px; right: 20px; ';

	// Append the necessary CSS to the head
	$('head').append('<style> #shareButton {width:50px;height:50px; ' + a + 'line-height:1em; opacity:0.85; font-size: 24px; background-color: #65bc71; color: white; border: none; padding: 12px; border-radius: 50%; cursor: pointer; } #fallbackMenu { ' + b + ' display: none; position: fixed; background-color: white; border: 1px solid #ccc; padding: 10px; border-radius: 5px; } #fallbackMenu i { font-size:24px; margin: 5px; cursor: pointer; } #closeButton { position: absolute; top: 0; right: 0; background: none; border: none; padding: 1px 4px 0 0; cursor: pointer; }</style>');

	// Bind the click event handler to the share button
	$('#shareButton').click(function() {
		/// device's native sharing menu
		if (navigator.share) {
			navigator.share({
				title: document.title,
				url: window.location.href
			}).then(() => {
				// console.log('Thanks for sharing!');
			})
				.catch(
					// console.error
			);
		} else {
			$('#fallbackMenu').show();
		}
	});

	$('#closeButton').click(function() {
		$('#fallbackMenu').hide();
	});

	// Bind the click event handler to the fallback share buttons
	$('#fallbackMenu i').click(function() {
		var platform = $(this).attr('class').split(' ')[1];
		var url = window.location.href;
		var title = document.title;
		switch (platform) {
			case 'fa-facebook-square':
				window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(title));
				break;
			case 'fa-twitter-square':
				window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + ' ' + encodeURIComponent(url));
				break;
			case 'fa-linkedin':
				window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title));
				break;
			case 'fa-pinterest-square':
				window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&description=' + encodeURIComponent(title));
				break;
			case 'fa-envelope-square':
				window.location.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
				break;
			case 'fa-whatsapp':
				window.location.href = 'whatsapp://send?text=' + encodeURIComponent(title) + ' ' + encodeURIComponent(url);
				break;
		}
		$('#fallbackMenu').hide();
	});
}

///////////// EXEC ///////////////

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
	// 

	shareButton();
	
	// 
	// 
});