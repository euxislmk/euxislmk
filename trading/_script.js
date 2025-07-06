// 

// VARS 

if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "main";
}

// /VARS

// FUNCS

function initializeMasonry() {

	var msnry = new Masonry('#components', {
		itemSelector: '.component',
		// columnWidth: '.component-sizer',
		percentPosition: true,
		horizontalOrder: true
	});

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type === 'childList') {
				msnry.prepended(mutation.addedNodes);
				msnry.layout();
			}
		});
	});

	var config = {
		childList: true
	};

	observer.observe(document.querySelector('#components'), config);

}

function orig_initializeMasonry() {

	/// footer must be handled here because it gets handged in between components
	$('#footer').remove();
	$('#components').append(allFooterHTML());

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

	var a = 'position: fixed; bottom: 30px; right: 25px;';
	var b = 'bottom: 30px; right: 20px; ';

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
			"colorTheme": "dark"
		});
		document.getElementById(divId).appendChild(script);
	}
}

function closer(element) {
	$(element).parent().remove();
	initializeMasonry();
}

function transformScaler(width, height, scale) {

	// returns [0] as parent css, and [1] as child's css

	var reducedWidth = (width * (1 - scale));
	var reducedHeight = (height * (1 - (scale)));

	var top = reducedHeight / 2;
	var left = reducedWidth / 2;

	var output = ['width:' + (width - reducedWidth) + 'px;height:' + (height - reducedHeight) + 'px;position:relative;overflow:hidden;', 'width:' + width + 'px;height:' + height + 'px;top:-' + top + 'px;left:-' + left + 'px;overflow:hidden;position:absolute;']

	return output;

}

function urlParam(name) {
	// req jq
	// console.log(urlParam('a'));  // Outputs: "b"
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results == null) {
		return null;
	} else {
		return decodeURI(results[1]) || 0;
	}
}

function scaled_componentHtml(stocksymbol, s, width = 310, height = 382, scale = 0.8, interval = "1D") {

	// var scale = 0.40;
	// var width = 310;
	// var height = 382;

	var a = '<div style="' + transformScaler(width, height, scale)[0] + '" class="_component com_' + (stocksymbol.replace(":", "")) + "_" + s + '">' +

		' <iframe style="' + transformScaler(width, height, scale)[1] + '" src="./c/?s=' + s + '&b=' + scale + '&c=' + interval + '&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe>  </div>';

	return a;

}

// function multi_2TA1CH_HTML(stocksymbol) {

// 	var a = '<div class="component">' +

// 		'<div style="margin:4px; display:flex;box-shadow:0 0 4px #555;_outline:solid 1px #eee;">' + // !IMP! extra div req else masonry fcks up flex on component

// 		'<div style="z-index:2;text-transform:uppercase; padding:2px;color:white;font:bold 12px/1em sans-serif; position:absolute;left:0;top:0;background:#65bb70;">' + stocksymbol + '</div>' +

// 		'<div onclick="closer(this);return false;" style="color:white;z-index:2;display:block;font:12px/1em Arial; cursor:pointer;position:absolute;right:0;top:0;">X</div>' +

// 		'<div>' +

// 		scaled_componentHtml(stocksymbol, "ta", undefined, undefined, 0.4) +

// 		scaled_componentHtml(stocksymbol, "ta", undefined, undefined, 0.4, "1W") +

// 		'</div><div>' +

// 		scaled_componentHtml(stocksymbol, "ch", 460, 380) +

// 		'</div>' +

// 		'</div>' +

// 		'</div>';

// 	return a;

// }

function multi_2TA1CH_HTML(stocksymbol) {

	var a = '<div class="component">' +

		'<div class="component_wrap" style="opacity:0.7; z-index:2; position:absolute;right:2px;top:2px;overflow:hidden;border:solid 1px #444;">' +

		scaled_componentHtml(stocksymbol, "mc", 200, 100, 0.8, "3M") +

		'</div>' +

		'<div style="margin:4px; display:flex;box-shadow:0 0 4px #555;_outline:solid 1px #eee;">' + // !IMP! extra div req else masonry fcks up flex on component

		'<div style="z-index:2;text-transform:uppercase; padding:2px;color:white;font:bold 12px/1em sans-serif; position:absolute;left:0;top:0;background:#65bb70;">' + stocksymbol + '</div>' +

		'<div onclick="closer(this);return false;" style="color:white;z-index:3;display:block;font:12px/1em Arial; cursor:pointer;position:absolute;right:0;top:0;">X</div>' +

		'<div>' +

		scaled_componentHtml(stocksymbol, "ta", undefined, undefined, 0.4) +

		scaled_componentHtml(stocksymbol, "ta", undefined, undefined, 0.4, "1W") +

		'</div><div>' +

		scaled_componentHtml(stocksymbol, "ch", 460, 380) +

		'</div>' +

		'</div>' +

		'</div>';

	return a;

}

function multi_runSymbol() {

	var stocksymbol = null;

	try {
		stocksymbol = $('#exchange').text().trim() + ':' + $('#stockSymbol').val().trim();
	} catch (e) {}

	if (stocksymbol) {

		$('#components').prepend(multi_2TA1CH_HTML(stocksymbol));

		initializeMasonry();

	}

}

function componentHtml(stocksymbol, s, css = "width:310px;height:382px;") {

	// var a = '<div style="' + css + ' max-width: 99%;" class="component" id="com_' + s + '"><iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=' + s + '&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>';

	var a = '<div style="position:relative;' + css + ' max-width: 99%;" class="component com_' + (stocksymbol.replace(":", "")) + "_" + s + '">' +

		// '<div style="text-transform:uppercase; padding:2px;color:white;font:12px/1em Arial; position:absolute;left:0;top:0;background:#65bb70;">' + stocksymbol + '</div>' +

		// '<div onclick="closer(this);return false;" style="padding:2px;font:12px/1em Arial; cursor:pointer;border-radius:10px;position:absolute;right:0;top:0;background:#eee;">X</div>' +

		'<iframe style="width:100%; height:100%;overflow:hidden;" src="./c/?s=' + s + '&a=' + stocksymbol + '" scrolling="no" frameborder="0" border="0"></iframe></div>';

	return a;

}

function runSymbol() {

	var stocksymbol = $('#exchange').text().trim() + ':' + $('#stockSymbol').val().trim();

	// console.log(stocksymbol);

	$('#components').empty();

	initializeMasonry();

	$('#components').prepend(componentHtml(stocksymbol, "in", "width:310px;height:280px;"));
	initializeMasonry();

	$('#components').prepend(componentHtml(stocksymbol, "pr", "width:600px;height:280px;"));
	initializeMasonry();

	$('#components').prepend(componentHtml(stocksymbol, "fu", "width:98%;height:500px;"));
	initializeMasonry();

	$('#components').prepend(componentHtml(stocksymbol, "ch", "width:600px;height:382px;"));
	initializeMasonry();

	$('#components').prepend(componentHtml(stocksymbol, "ta"));
	initializeMasonry();

	// $('#components').append('<div class="component" id="footer" style="clear:both;width:99%;"> <footer class="text-center py-3"> <div class="container"> <p class="mb-0 fs-8">E&OE. For informational purposes only. Not for trading or advice.</p> </div> </footer> </div>');

	initializeMasonry();

}

function main_Form(func = "runSymbol") {

	var exchanges = ['TSX', 'NASDAQ', 'NYSE', 'AMS', 'SSE', 'JPX', 'SZSE', 'HSI', 'NSE', 'LSE', 'FRA', 'ASX', 'BSE', 'ICE', 'TWSE', 'JSE', 'KRX', 'B3SA3', 'MOEX'];

	var defaultExchange = localStorage.getItem('exchange') || 'TSX';
	var defaultSymbol = 'AC';

	if (urlParam('s')) {
		var stockSymbol = (urlParam('s')).trim();
		defaultExchange = stockSymbol.split(":")[0];
		defaultSymbol = stockSymbol.split(":")[1];
		document.title = stockSymbol + " - " + document.title;

	}

	// var defaultExchange = localStorage.getItem('exchange') || 'TSX';
	// var defaultSymbol = 'AC';

	var htmlContent = '<form onsubmit="event.preventDefault(); ' + func + '();"> <div class="input-group"> <input style="" type="text" id="stockSymbol" placeholder="Enter Stock Symbol" class="form-control" value="' + defaultSymbol + '"> <button type="button" id="exchange" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">' + defaultExchange + '</button> <ul class="dropdown-menu dropdown-menu-end">' + (exchanges.map(exchange => '<li><a class="dropdown-item" href = "#" onclick="event.preventDefault();">' + exchange + '</a></li>').join('')) + '</ul> </div> </form>';

	$('#lookup').prepend(htmlContent);

	$('.dropdown-menu a').click(function(event) {
		event.preventDefault();
		var selectedExchange = $(this).text();
		$('#exchange').html(selectedExchange + ' <span class="caret"></span>');
		localStorage.setItem('exchange', selectedExchange);
	});

}

function templateHTML() {

	var h1 = (document.title).replace(" - Financializer", "");
	var a = `

		<div id="header" class="container" style="margin:4px auto; outline:solid 4px #65bb70; max-width:99.9%; background:#65bb70">

			<div class="row align-items-center" style="max-width:500px;">

				<div id="logo" class="col col-2"><img class="img-fluid" src="../img/logo_250.png" /></div>

				<div id="title" class="col col-2"><h1 style="margin: 0; padding: 0; font:11px/1em sans-serif; color: white; line-height:1em;">${h1}</h1></div>
				
				<div id="lookup" class="col col-6"></div>

				<div id="menu" class="col col-2"></div>

			</div>
			<!-- #header -->

		</div>



		<div id="content" style="margin:10px auto;">
			<div class="container" style="max-width:99.9%">
				<div id="components"></div>
			</div>
		</div>

			`;

	// var a = `
	// 	<div id="header" class="container" style="padding:3px;max-width:99.9%; background:#65bb70">
	// 		<div class="row align-items-center" style="max-width:500px;">
	// 			<div id="logo" class="col col-2"><img class="img-fluid" src="../img/logo_250.png" /></div>
	// 			<div id="title" class="col col-3"><h1 style="margin: 0; padding: 0; font-size: 16px; color: white; line-height:1em;">Stock Analysis</h1></div>
	// 			<div id="lookup" class="col col-7"></div>
	// 		</div>
	// 	</div>
	// 	<div id="content" style="margin:10px auto;">
	// 		<div class="container" style="max-width:99.9%">
	// 			<div id="components"></div>
	// 		</div>
	// 	</div>
	// 		`;

	return a;

}

function allFooterHTML() {

	var a = '<div class="component" id="footer" style="clear:both;width:99%;"> <footer class="text-center py-3"> <div class="container"> <p class="mb-0 fs-8">E&OE. For informational purposes only. Not for trading or advice.</p> </div> </footer> </div>';
	return a;

}

function menu() {

	$("#menu").html(`

		<style>#menu a {color:white;font-size:13px;}</style>

		<a href="./multi.html">Multi</a>

		`);

}

// /FUNCS

//

$(document).ready(function() {

	$('head').append('<style>body{background:black;}</style>');

	if (thsSiteTyp == "multi") {

		// headless or not (for embedding elsewhere e.g apps)

		if (urlParam('m') == "hl") { // mode headless
			// 
			// console.log('headless!');
			$('head').append('<style>#header, #shareButton{display:none;}#content,.container, * {padding:0; margin:0!important;}</style>');
		}

		// headless or not

		$('body').append(templateHTML());

		main_Form("multi_runSymbol");

		multi_runSymbol();

		menu();

		initializeMasonry();

		$('#stockSymbol').focus();

		shareButton();

	}

	if (thsSiteTyp == "main") {

		$('body').append(templateHTML());

		main_Form();

		runSymbol();

		menu();

		initializeMasonry();

		$('#stockSymbol').focus();

		shareButton();

	} // main

	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	/// DYNAMIC CATCHER
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////
	///////////////////////////////

	if (thsSiteTyp == "dyn_catcher") {

		// $('head').append('<style>body{margin:0;padding:0;font-family:Roboto, sans-serif;font-size:12px;}</style>');

		document.write('<style>body{background:black;margin:0;padding:0;font-family:Roboto, sans-serif;font-size:12px;}</style>');

				// 
		// 
		//  market overview

		if (qs.get("s") == "mo") {

			// IMP for "mo" only is JSON
			var stocksymbol = qs.get("a");
			// &a=[{"s":"TSX:TSX","d":"INDEX:TSX"}]
			// console.log(stocksymbol);
			// var s1 = qs.get("s1");
			// var d1 = qs.get("d1");


			var scale = qs.get("b") || '1';
			var interval = qs.get("c") || '1D';

			document.write(`
				<style> </style>

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> --> 
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
				    {
				    "colorTheme": "dark",
				    "dateRange": "${interval}",
				    "showChart": true,
				    "locale": "en",
				    "width": "100%",
				    "height": "100%",
				    "largeChartUrl": "",
				    "isTransparent": true,
				    "showSymbolLogo": true,
				    "showFloatingTooltip": true,
				    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
				    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
				    "gridLineColor": "rgba(240, 243, 250, 0)",
				    "scaleFontColor": "rgba(106, 109, 120, 1)",
				    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
				    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
				    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
				    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
				    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
				    "tabs": [
				      {
				        "title": "Indices",
				        "symbols": ${stocksymbol},
				        "originalTitle": "Indices"
				      }
				    ]
				  }
				  </script>
				</div>

							`);

		}


		// [{"s":"${s1}","d":"${d1}"}]


		// 
		// 
		//  mini chart

		if (qs.get("s") == "mc") {

			var stocksymbol = qs.get("a");
			var scale = qs.get("b") || '1';
			var interval = qs.get("c") || '3M';

			document.write(`
				<style> </style>

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
				  {
				  "symbol": "${stocksymbol}",
				  "width": "100%",
				  "height": "100%",
				  "locale": "en",
				  "dateRange": "${interval}",
				  "colorTheme": "dark",
				  "isTransparent": true,
				  "autosize": true,
				  "largeChartUrl": "",
				  "chartOnly": true,
				  "noTimeScale": false

				}
				  </script>
				</div>
							`);

		}

		if (qs.get("s") == "ta") {

			// scaleElement($('body'), 0.3);

			var stocksymbol = qs.get("a");
			var scale = qs.get("b") || '1';
			var interval = qs.get("c") || '1D';

			document.write(`


				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> --> 
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
				  {
				  "interval": "${interval}",
				  "width": "100%",
				  "isTransparent": true,
				  "height": "100%",
				  "symbol": "${stocksymbol}",
				  "showIntervalTabs": true,
				  "displayMode": "single",
				  "locale": "en",
				  "colorTheme": "dark"
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
			var scale = qs.get("b") || '1';

			// simple widget
			document.write(`
				<style> </style>

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
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
				  "colorTheme": "dark",
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

		} // ch

		// 
		// 

		// profile

		if (qs.get("s") == "pr") {

			var stocksymbol = qs.get("a");
			var scale = qs.get("b") || '1';

			document.write(`

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js" async>
				  {
				  "width": "100%",
				  "height": "100%",
				  "isTransparent": true,
				  "colorTheme": "dark",
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
			var scale = qs.get("b") || '1';

			document.write(`

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js" async>
				  {
				  "symbol": "${stocksymbol}",
				  "width": "100%",
				  "locale": "en",
				  "colorTheme": "dark",
				  "isTransparent": true
				}
				  </script>
				</div>

							`);

		} // pr

		// 
		// 

		// fundamentals

		if (qs.get("s") == "fu") {

			var stocksymbol = qs.get("a");
			var scale = qs.get("b") || '1';

			document.write(`

				<div class="tradingview-widget-container" style="transform:scale(${scale})">
				  <div class="tradingview-widget-container__widget"></div>
				  <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div> -->
				  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js" async>
				  {
				  "isTransparent": true,
				  "largeChartUrl": "",
				  "displayMode": "adaptive",
				  "width": "100%",
				  "height": "100%",
				  "colorTheme": "dark",
				  "symbol": "${stocksymbol}",
				  "locale": "en"
				}
				  </script>
				</div>

							`);

		} // pr

	}

});

// 
//