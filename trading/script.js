// 

// VARS 

if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "main";
}

// /VARS

// FUNCS

function initializeMasonry() {
	// Initialize Masonry
	var msnry = new Masonry('#components', {
		itemSelector: '.component',
		// columnWidth: '.component-sizer',
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

}

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
	// Apply the scale transform
	$element.css('transform', 'scale(' + scaleFactor + ')');

	// Calculate the new margins
	var newMarginTop = -($element.outerHeight() * (1 - scaleFactor)) / 2;
	var newMarginLeft = -($element.outerWidth() * (1 - scaleFactor)) / 2;

	// Apply the new margins
	$element.css('margin-top', newMarginTop + 'px');
	$element.css('margin-left', newMarginLeft + 'px');
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

function componentHtml(stocksymbol, s, css = "width:310px;height:382px;") {

	var a = '<div style="' + css + ' max-width: 99%;" class="component" id="com_' + s + '"><iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=' + s + '&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>';

	return a;

}

function runSymbol() {

	var stocksymbol = $('#exchange').text().trim() + ':' + $('#stockSymbol').val().trim();

	// console.log(stocksymbol);

	$('#components').empty();

	// $('#components').append('<div class="component component-sizer" id="com_ta"><iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=ta&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>');

	$('#components').append(componentHtml(stocksymbol, "ta"));

	$('#components').append(componentHtml(stocksymbol, "ch", "width:600px;height:382px;"));

	$('#components').append(componentHtml(stocksymbol, "in", "width:310px;height:280px;"));

	$('#components').append(componentHtml(stocksymbol, "pr", "width:600px;height:280px;"));

		$('#components').append(componentHtml(stocksymbol, "fu", "width:98%;height:500px;"));


	$('#components').append('<div class="component" id="footer" style="clear:both;width:99%;"> <footer class="text-center py-3"> <div class="container"> <p class="mb-0 fs-8">E&OE. For informational purposes only. Not for trading or advice.</p> </div> </footer> </div>');

	initializeMasonry();

}

function main_Form() {

	var exchanges = ['TSX', 'NASDAQ', 'NYSE', 'AMS', 'SSE', 'JPX', 'SZSE', 'HSI', 'NSE', 'LSE', 'FRA', 'ASX', 'BSE', 'ICE', 'TWSE', 'JSE', 'KRX', 'B3SA3', 'MOEX'];
	var defaultExchange = localStorage.getItem('exchange') || 'TSX';
	var defaultSymbol = 'AC';
	var htmlContent = '<form onsubmit="event.preventDefault(); runSymbol();"> <div class="input-group"> <input style="text-transform:uppercase" type="text" id="stockSymbol" placeholder="Enter Stock Symbol" class="form-control" value="' + defaultSymbol + '"> <button type="button" id="exchange" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">' + defaultExchange + '</button> <ul class="dropdown-menu dropdown-menu-end">' + (exchanges.map(exchange => '<li><a class="dropdown-item" href = "#" onclick="event.preventDefault();">' + exchange + '</a></li>').join('')) + '</ul> </div> </form>';

	$('#lookup').prepend(htmlContent);

	$('.dropdown-menu a').click(function(event) {
		event.preventDefault();
		var selectedExchange = $(this).text();
		$('#exchange').html(selectedExchange + ' <span class="caret"></span>');
		localStorage.setItem('exchange', selectedExchange);
	});

}

// /FUNCS

//

$(document).ready(function() {

	if (thsSiteTyp == "main") {

		$('body').append(
			`
			<div id="header" class="container" style="padding:3px;max-width:99.9%; background:#65bb70">
				<div class="row align-items-center" style="max-width:500px;">
					<div id="logo" class="col col-2"><img class="img-fluid" src="../img/logo_250.png" /></div>
					<div id="title" class="col col-3"><h1 style="margin: 0; padding: 0; font-size: 16px; color: white; line-height:1em;">Stock Analysis</h1></div>
					<div id="lookup" class="col col-7"></div>
				</div>
			</div>

			<div id="content" style="margin:10px auto;">
				<div class="container" style="max-width:99.9%">
				<div id="components"></div>
				</div>
			</div>


			<!-- 
			<hr/>
			<div id="footer" style="clear:both;width:99%;">
			<footer class="text-center py-3">
			    <div class="container">
			        <p class="mb-0 fs-8">E&OE. For informational purposes only. Not for trading or advice.</p>
			    </div>
			</footer>
			</div>
			`
		);

		main_Form();

		runSymbol();

		initializeMasonry();

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

			// scaleElement($('body'), 0.3);

			var stocksymbol = qs.get("a");

			document.write(`

				<div class="tradingview-widget-container">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> --> 
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
				  {
				  "interval": "1D",
				  "width": "100%",
				  "isTransparent": true,
				  "height": "100%",
				  "symbol": "${stocksymbol}",
				  "showIntervalTabs": true,
				  "displayMode": "single",
				  "locale": "en",
				  "colorTheme": "light"
				}
				  </script>
				</div>

			`);

			// scaleElement($('body'), 0.7);
			// scaleAndCenterElement($('body'), 0.7);

			// $('body').css({
			// 	transform: 'scale(0.9)'
			// });

			// $('body').append('<div style="_width:300px;_height:400px;overflow:hidden;"> <div id="tradingview-widget-container" class="tradingview-widget-container"> <div class="tradingview-widget-container__widget"></div> <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->');

			// tradingviewAnalysis(stocksymbol, "tradingview-widget-container");

		} // s=ta

		// 
		// 

		// chart

		if (qs.get("s") == "ch") {

			var stocksymbol = qs.get("a");

			// simple widget
			document.write(`
				<div class="tradingview-widget-container">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" async>
				  {
				  "symbols": [
				    [
				      "${stocksymbol}|1D"
				    ]
				  ],
				  "chartOnly": false,
				  "width": "100%",
				  "height": "100%",
				  "locale": "en",
				  "colorTheme": "light",
				  "autosize": false,
				  "showVolume": false,
				  "showMA": false,
				  "hideDateRanges": false,
				  "hideMarketStatus": false,
				  "hideSymbolLogo": false,
				  "scalePosition": "right",
				  "scaleMode": "Normal",
				  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
				  "fontSize": "10",
				  "noTimeScale": false,
				  "valuesTracking": "1",
				  "changeMode": "price-and-percent",
				  "chartType": "area",
				  "maLineColor": "#2962FF",
				  "maLineWidth": 1,
				  "maLength": 9,
				  "lineWidth": 2,
				  "lineType": 0,
				  "dateRanges": [
				    "1d|1",
				    "1m|30",
				    "3m|60",
				    "12m|1D",
				    "60m|1W",
				    "all|1M"
				  ]
				}
				  </script>
				</div>
							`);

			// advanced widget

			// 			document.write(`

			// <div class="tradingview-widget-container" style="height:100%;width:100%">
			// <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
			// <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
			// <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
			// {
			// "autosize": true,
			// "symbol": "${stocksymbol}",
			// "interval": "1D",
			// "timezone": "Etc/UTC",
			// "theme": "light",
			// "style": "1",
			// "locale": "en",
			// "enable_publishing": false,
			// "allow_symbol_change": true,
			// "calendar": false,
			// "support_host": "https://www.tradingview.com"
			// }
			// </script>
			// </div>

			// 				`);

		} // ch

		// 
		// 

		// profile

		if (qs.get("s") == "pr") {

			var stocksymbol = qs.get("a");

			document.write(`

				<div class="tradingview-widget-container">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js" async>
				  {
				  "width": "100%",
				  "height": "100%",
				  "isTransparent": true,
				  "colorTheme": "light",
				  "symbol": "${stocksymbol}",
				  "locale": "en"
				}
				  </script>
				</div>

			`);

		} // pr

		// 
		// 

		// info

		if (qs.get("s") == "in") {

			var stocksymbol = qs.get("a");

			document.write(`

				<!-- TradingView Widget BEGIN -->
				<div class="tradingview-widget-container">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js" async>
				  {
				  "symbol": "${stocksymbol}",
				  "width": "100%",
				  "locale": "en",
				  "colorTheme": "light",
				  "isTransparent": true
				}
				  </script>
				</div>
				<!-- TradingView Widget END -->

							`);

		} // pr

		// 
		// 

		// fundamentals

		if (qs.get("s") == "fu") {

			var stocksymbol = qs.get("a");

			document.write(`

				<div class="tradingview-widget-container">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js" async>
				  {
				  "isTransparent": true,
				  "largeChartUrl": "",
				  "displayMode": "adaptive",
				  "width": "100%",
				  "height": "100%",
				  "colorTheme": "light",
				  "symbol": "${stocksymbol}",
				  "locale": "en"
				}
				  </script>
				</div>

							`);

		} // pr

	}

});