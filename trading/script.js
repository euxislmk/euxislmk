// 

// VARS 

if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "main";
}

// /VARS

// FUNCS

function shareButton() {

	document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">');

	// req CSS font-awesome

	// Append the necessary HTML to the div
	// $('#' + divId).append(`
	$('body').append(' <button id="shareButton"><i class="fas fa-share-alt"></i></button> <div id="fallbackMenu"> <button id="closeButton">X</button> <i class="fas fa-envelope-square"></i> <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-whatsapp"></i> <!-- i class="fab fa-pinterest-square"></i --> </div> ');

	var a = 'position: fixed; bottom: 70px; right: 25px;';
	var b = 'bottom: 70px; right: 20px; ';

	// Append the necessary CSS to the head
	$('head').append('<style> #shareButton { ' + a + 'line-height:1em; opacity:0.85; font-size: 24px; background-color: #65bb70; color: white; border: none; padding: 12px; border-radius: 50%; cursor: pointer; } #fallbackMenu { ' + b + ' display: none; position: fixed; background-color: white; border: 1px solid #ccc; padding: 10px; border-radius: 5px; } #fallbackMenu i { font-size:24px; margin: 5px; cursor: pointer; } #closeButton { position: absolute; top: 0; right: 0; background: none; border: none; padding: 1px 4px 0 0; cursor: pointer; }</style>');

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

function scaleElement($element, scaleFactor) {
	// Get the original width and height
	var originalWidth = $element.width();
	var originalHeight = $element.height();

	// Calculate the new width and height
	var newWidth = originalWidth * scaleFactor;
	var newHeight = originalHeight * scaleFactor;

	// Set the new width and height
	$element.css({
		width: newWidth + 'px',
		height: newHeight + 'px',
		transform: 'scale(' + scaleFactor + ')'
	});
}

function tradingviewAnalysis(symbol, divId) {
	if (symbol) {
		$('#' + divId).empty();
		var script = document.createElement('script');
		script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
		script.async = true;
		script.innerHTML = JSON.stringify({
			"interval": "1D",
			"width": "100%",
			"isTransparent": true,
			"height": "100%",
			"symbol": symbol,
			"showIntervalTabs": true,
			"displayMode": "single",
			"locale": "en",
			"colorTheme": "light"
		});
		document.getElementById(divId).appendChild(script);
	}
}

function runSymbol() {

	var stocksymbol = $('#exchange').text().trim() + ':' + $('#stockSymbol').val().trim();

	// console.log(stocksymbol);

	$('#components').empty();
	// $('#components').append('<style>.component{display:inline-block;}<style>');

	$('#components').append('<div class="component component-sizer" id="com1"><iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=ta&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>');

	$('#components').append('<div class="component component-larger" id="com2"><iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=ch&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>');

}

function main_Form() {
	var exchanges = ['TSX', 'NASDAQ', 'NYSE', 'AMS', 'SSE', 'JPX', 'SZSE', 'HSI', 'NSE', 'LSE', 'FRA', 'ASX', 'BSE', 'ICE', 'TWSE', 'JSE', 'KRX', 'B3SA3', 'MOEX'];
	var defaultExchange = localStorage.getItem('exchange') || 'TSX';
	var defaultSymbol = 'AC';
	var htmlContent = '<form onsubmit="event.preventDefault(); runSymbol();"> <div class="input-group"> <input type="text" id="stockSymbol" placeholder="Enter Stock Symbol" class="form-control" value="' + defaultSymbol + '"> <button type="button" id="exchange" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">' + defaultExchange + '</button> <ul class="dropdown-menu dropdown-menu-end">' + (exchanges.map(exchange => '<li><a class="dropdown-item" href = "#" onclick="event.preventDefault();">' + exchange + '</a></li>').join('')) + '</ul> </div> </form>';
	// var htmlContent = '<form onsubmit="event.preventDefault(); runSymbol();"> <div class="input-group"> <input type="text" id="stockSymbol" placeholder="Enter Stock Symbol" class="form-control" value="' + defaultSymbol + '"> <div class="input-group-btn"> <button type="button" id="exchange" data-toggle="dropdown" class="btn btn-default dropdown-toggle">' + defaultExchange + ' <span class="caret"></span> </button> <ul class="dropdown-menu dropdown-menu-right">' + (exchanges.map(exchange => '<li><a href = "#" onclick="event.preventDefault();">' + exchange + '</a></li>').join('')) + '</ul> </div> </div> </form>';

	$('#lookup').prepend(htmlContent);

	$('.dropdown-menu a').click(function(event) {
		event.preventDefault();
		var selectedExchange = $(this).text();
		$('#exchange').html(selectedExchange + ' <span class="caret"></span>');
		localStorage.setItem('exchange', selectedExchange);
	});

	// runSymbol();

}

// /FUNCS

//

$(document).ready(function() {

	if (thsSiteTyp == "main") {

		$('body').append(`

<div id="header" class="container" style="max-width:99.9%; background:#65bb70">
	<div class="row align-items-center" style="max-width:400px;">
		<div id="logo" class="col col-3"><img src="../img/header_150x50.png" /></div>
		<div id="title" class="col col-3"><h1 style="margin: 0; padding: 0; font-size: 21px; color: white; line-height:1em;">Stock Analysis</h1></div>
		<div id="lookup" class="col col-6"></div>
	</div>
</div>

<div id="content">
	<div class="container" style="max-width:99.9%"></div>
</div>

<div id="footer">
<footer class="text-center py-3">
    <div class="container">
        <p class="mb-0 fs-8">E&OE. For informational purposes only. Not for trading or advice.</p>
    </div>
</footer>
</div>

			`);

		$('#content .container').append('<div id="components"></div>');

		main_Form();
		runSymbol();

		// runSymbol();

		// <p>E&OE. For informational purposes only. Not for trading or advice.</p>

		// ./c/?s=ch&a=NASDAQ:MSFT

		// var msnry = new Masonry('#components', {
		// 	itemSelector: '.component',
		// 	columnWidth: '.component-sizer',
		// 	percentPosition: true
		// });
		// msnry.layout();

		// Initialize Masonry
		var msnry = new Masonry('#components', {
			itemSelector: '.component',
			columnWidth: '.component-sizer',
			percentPosition: true,
			horizontalOrder: true

		});

		// Create a MutationObserver instance
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.type === 'childList') {
					msnry.layout();
				}
			});
		});

		// Configuration of the observer
		var config = {
			childList: true
		};

		// Pass in the target node (in this case, #components), as well as the observer options
		observer.observe(document.querySelector('#components'), config);

		$('#stockSymbol').focus();

		shareButton();

	} // main

	// 
	// 
	// 
	// 
	// 
	// 

	/// DYNAMIC CATCHER

	if (thsSiteTyp == "dyn_catcher") {

		$('head').append('<style>body{margin:0;padding:0;font-family:Roboto, sans-serif;font-size:12px;}</style>');

		// 
		// 
		// 
		// 

		// technical analysis

		if (qs.get("s") == "ta") {

			var stocksymbol = qs.get("a");

			$('body').append('<div style="width:300px;height:400px;overflow:hidden;"> <div id="tradingview-widget-container" class="tradingview-widget-container"> <div class="tradingview-widget-container__widget"></div> <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->');

			tradingviewAnalysis(stocksymbol, "tradingview-widget-container");

		} // s=ta

		// 
		// 

		if (qs.get("s") == "ch") {

			var stocksymbol = qs.get("a");

			document.write(`

<div class="tradingview-widget-container" style="height:100%;width:100%">
<div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
<!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
<script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
{
"autosize": true,
"symbol": "${stocksymbol}",
"interval": "1D",
"timezone": "Etc/UTC",
"theme": "light",
"style": "1",
"locale": "en",
"enable_publishing": false,
"allow_symbol_change": true,
"calendar": false,
"support_host": "https://www.tradingview.com"
}
</script>
</div>

				`);


		} // s=ch

		// 
		// 
		// 
		// 

	}

});