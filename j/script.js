/// for news., store.
///
///
if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "news";
}
// 
// === VARS ===
// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
//
currProt = (document.location.protocol == 'https:') ? 'https:' : 'http:';
ThsBlg_rt_dmn = "news.financializer.com";
ThsBlg_tw_pr = "financializer";
ThsBlg_aT_cd = 'ra-4ec5046836d87faa';
numOfPostsPerPage = 26;
mnuUrlPrefix = '//' + ThsBlg_rt_dmn + '/search?q=';
archQryURLSuff_dateTrue = '&amp;max-results=' + numOfPostsPerPage + '&amp;by-date=true';
archQryURLSuff_dateFalse = '&amp;max-results=' + numOfPostsPerPage + '&amp;by-date=false';
archQryURLSuff = archQryURLSuff_dateFalse;
thsBlg_amz = {
	// no empties!
	'com': 'fnnc-20',
	'ca': 'financializer-20',
	'co.uk': 'financializer-21',
	'de': 'financializerde-21',
	'fr': 'financializerfr04-21',
	'it': 'financializerit-21',
	'es': 'financializeres-21'
};
thsBlg_amz_defKW = "money";
thsBlg_epn = "5337817697";
thsBlg_dyn_catcher = "www.financializer.com/c/";
thsBlg_img_cdn = "www.financializer.com/img/";
thsBlg_gasJsnPrx = "AKfycbxTy7YPX7Wq9tjYx3Ad2QjCdSAT3jnIkmmM0cz0D_e2ZPWrWM0";
// 
//// ----------<pagelevelIfNotHardcoded>---------- //
//// v2
function pagelevelIfNotHardcoded() {
	try {
		var plTag = document.getElementsByTagName("head")[0].getElementsByTagName("script") || 0;
		for (var i = 0; i < plTag.length; i++) {
			if (plTag[i].textContent.match(/enable_page_level_ads/im)) {
				return;
			}
		}
		(adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: thsBlg_as,
			enable_page_level_ads: true
		});
	} catch (e) {}
}
if (bnndQry != "yes") { //////////// if bnndQry  ///////////
	// pagelevelIfNotHardcoded();
}
////
//// ----------</pagelevelIfNotHardcoded>---------- //
////
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//' + thsBlg_img_cdn + 'ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
// 
// ========== functions ==========
///// MODDED FOR 
function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	if (bnndQry == "yes") {
		// 
	} else {
		// v10 - bugfix
		if (!document.getElementById(divId)) {
			// 
		} else {
			var a = "";
			if (orient == "link") {
				a = "link"
			};
			if (orient == "matched") {
				a = "autorelaxed"
			};
			if (orient == "a") {
				a = "auto"
			};
			if (orient == "h") {
				a = "horizontal"
			};
			if (orient == "v") {
				a = "vertical"
			};
			if (orient == "r") {
				a = "rectangle"
			};
			if (orient == "rh") {
				a = "rectangle, horizontal"
			};
			if (orient == "rv") {
				a = "rectangle, vertical"
			};
			var divWidth = typeof divWidth !== 'undefined' ? divWidth : '100%';
			var divHeight = typeof divHeight !== 'undefined' ? divHeight : '100%';
			try {
				document.getElementById(divId).innerHTML = '' +
					'<style type="text/css">' +
					'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
					'</style>' +
					prefix +
					'<span  class="ldng_16_3x"  style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
					' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
					' style="display:block" ' +
					' data-ad-client="' + '\x63' + 'a' + '-\x70\x75b-' + (1873488713147657 + 528760035384255 + 3287954364827809) + '" ' +
					' data-ad-slot="' + slot + '" ' +
					' data-ad-format="' + a + '"></ins> ' +
					'</span>' +
					postfix +
					'';
				(adsbygoogle = window.adsbygoogle || []).push({
						params: {
							google_ad_channel: channel
						}
					});
			} catch (e) {
				return true;
			}
		}
	}
}

function addthisN(divId, url, title, template) {
	/**
	- V2 - 
	*/
	/// vars to set ///
	var emailPostfix = ""; // eg " - via mysite"
	var pageImgUrl = "";
	try {
		pageImgUrl = document.querySelector('link[rel*="image_src"]').getAttribute('href'); // eg. for pinterest etc http://a.com/a.jpg
	} catch (e) {}
	/// current page's url and title if not passed
	var url = (typeof url !== 'undefined') ? url : window.location.href;
	var title = (typeof title !== 'undefined') ? title : document.title;
	var template = (typeof template !== 'undefined') ? template : "~<email>~~<facebook>~~<twitter>~~<pinterest>~~<whatsapp>~";
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	//// add css and js if not there
	if (document.querySelector('link[href*="rrssb.css"]') === null) {
		var all_css = document.createElement('link');
		all_css.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/css/rrssb.css");
		all_css.setAttribute("rel", "stylesheet");
		all_css.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(all_css);
		if (document.getElementById('addthisNScript')) {
			/////////////////////
		} else {
			var addthisScript = document.createElement('script');
			addthisScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/js/rrssb.min.js');
			addthisScript.setAttribute('id', 'addthisNScript');
			document.body.appendChild(addthisScript);
		}
	}
	///// more buttons at bit.ly/2XbypkQ
	///// MODIFY VARIOUS VARS & CODE ABOVE AND BELOW IF ADDING!
	var R_email_R = '  <li class="rrssb-email">' +
		'    <a href="mailto:?Subject=' + title + ' ' + emailPostfix + '&body=' + url + '">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .28 4.96L.27 19.04a2.353 2.353 0 0 0 2.345 2.346h18.77a2.354 2.354 0 0 0 2.348-2.347V4.96a2.356 2.356 0 0 0-2.347-2.346zm0 4.694L12 13.174 2.614 7.308V4.96L12 10.828l9.386-5.866V7.31z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_facebook_R = '  <li class="rrssb-facebook">' +
		'    <a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_twitter_R = '  <li class="rrssb-twitter">' +
		'    <a href="https://twitter.com/intent/tweet?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_pinterest_R = '  <li class="rrssb-pinterest">' +
		'    <a href="https://pinterest.com/pin/create/button/?url=' + url + '&media=' + pageImgUrl + '&description=' + title + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14.021 1.57C6.96 1.57 1.236 7.293 1.236 14.355S6.96 27.14 14.021 27.14s12.785-5.725 12.785-12.785C26.807 7.294 21.082 1.57 14.021 1.57zm1.24 17.085c-1.161-.09-1.649-.666-2.559-1.219-.501 2.626-1.113 5.145-2.925 6.458-.559-3.971.822-6.951 1.462-10.116-1.093-1.84.132-5.545 2.438-4.632 2.837 1.123-2.458 6.842 1.099 7.557 3.711.744 5.227-6.439 2.925-8.775-3.325-3.374-9.678-.077-8.897 4.754.19 1.178 1.408 1.538.489 3.168-2.128-.472-2.763-2.15-2.682-4.388.131-3.662 3.291-6.227 6.46-6.582 4.007-.448 7.771 1.474 8.29 5.239.579 4.255-1.816 8.865-6.102 8.533l.002.003z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_whatsapp_R = '  <li class="rrssb-whatsapp">' +
		'    <a href="whatsapp://send?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	//// 1ST REPLACE **THEN** REMOVE ALSO!
	var final_buttons = template.replace("~<email>~", R_email_R).replace("~<facebook>~", R_facebook_R).replace("~<twitter>~", R_twitter_R).replace("~<pinterest>~", R_pinterest_R).replace("~<whatsapp>~", R_whatsapp_R);
	//// 2ND NOW REMOVE UNNEEDED ONES!
	final_buttons = final_buttons.replace("~<email>~", "").replace("~<facebook>~", "").replace("~<twitter>~", "").replace("~<pinterest>~", "").replace("~<whatsapp>~", "");
	var rrssbHTML = '<ul class="rrssb-buttons clearfix">' + final_buttons + '</ul>';
	document.getElementById(divId).insertAdjacentHTML("beforeend", rrssbHTML);
}


function addthis_async_append(divId, customUrlTitle, url, title) {}

function fbad(prefix, postfix, divId, appId, plcmId, format, fbadCSS, fbadHTML) {
	// v2 - native support
	// format: '320x50', '300x250' or 'native'
	// fbadCSS: optional, if 'native', css before elements or ''
	// fbadHTML: REQUIRED IF 'native'; elements of ad (see tab Ref)
	if (!document.getElementById(divId)) {
		// 
	} else {
		window.fbAsyncInit = function() {
			FB.Event.subscribe(
				'ad.loaded',
				function(placementId) {
					console.log('Audience Network ad loaded');
					if (format == "native") {
						document.getElementById('ad_root').style.display = 'block';
					}
				}
			);
			FB.Event.subscribe(
				'ad.error',
				function(errorCode, errorMessage, placementId) {
					console.log('Audience Network error (' + errorCode + ') ' + errorMessage);
				}
			);
		};
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=" + appId;
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		if (format == "native") {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' + fbadCSS + '</style>' +
				'<div class="fb-ad" data-placementid="' + appId + '_' + plcmId + '" data-format="' + format + '" data-nativeadid="ad_root" data-testmode="false"></div> <div id="ad_root"> <a class="fbAdLink">' + fbadHTML + '</a> </div>';
		} else {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'</style>' +
				prefix +
				' <fb:ad placementid="' + appId + '_' + plcmId + '" format="' + format + '" testmode="false"></fb:ad> ' +
				postfix +
				'';
		}
	}
}

function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal);  // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function tablify(html_array, rows, cols, bord) {
	// v2 -
	// html_array e.g. ['<a><h3></h3><img/></a>', ''<a><h3></h3><img/></a>'']
	// rows,cols,bord='yes'
	var d = (bord == "yes") ? 'border:solid 1px #ccc!important;padding:0.5%!important;' : '';
	var a = '',
		b = '',
		c = '',
		counter = 0;
	a = '' +
		'<style type="text/css">' +
		'.axaffdtbl,.axaffdtbl a,.axaffdtbl img' +
		'{margin:0!important;background:#fff!important;box-shadow:none!important;border:none!important;}' +
		'.axaffdtbl {display:table;width:95%!important;border-collapse:collapse!important;}' +
		'.axaffdtbl_tr {display:table-row} ' +
		'.axaffdtbl_td {display:table-cell;vertical-align:top!important;' + d + '} ' +
		'.axaffdtbl a {text-decoration:none;display:block!important;width:100%!important;height:auto!important;}' +
		'.axaffdtbl img {width:100%!important;}' +
		'</style>' +
		'<span class="axaffdtbl">';
	for (i = 0; i < rows; i++) {
		b += '<span class="axaffdtbl_tr">';
		for (j = 0; j < cols; j++) {
			var item = html_array[counter] || ''; //TODO placeholder for empties
			b += '<span class="axaffdtbl_td">' + item + '</span>';
			counter++;
		}
		b += '</span>';
	}
	c = '</span>';
	return a + b + c;
}

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = divWidth * 1.3) {
	// v1
	// categ : "1234 | 4567" or "" for default set at epn pg
	// kw or "" - do -
	//
	// prevent too tall
	divHeight = ($(window).width() >= $(window).height()) ? 300 : divHeight;
	if (document.getElementById(divId)) {
		try {
			$.getScript("https://epnt.ebay.com/static/epn-smart-tools.js").done(function() {
				// make width always container's or ATLEAST 300!
				var desiredWidth = $('#' + divId).width() - 12;
				var usableWidth = (desiredWidth < 300 || divWidth < 300) ? 300 : desiredWidth;
				// console.log ( usableWidth + ' ' + divHeight)
				$('#' + divId).html(
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:scroll;">' + // epn won't show if less than 300px! only way to crop for smaller widths
					'<div id="epncont_' + divId + '" style="width:' + usableWidth + 'px;height:' + divHeight + 'px;">' +
					'<ins data-keyword="' + kw + '" data-category-id="' + categ + '" class="epn-placement" data-config-id="' + adID + '"></ins>' +
					'</div> </div>' +
					'');
			});
		} catch (e) {
			console.log('no epnSmPl');
		}
	}
}

function epnFromLbls(keywords, div) {
	// v6 -  gasJsnPrx
	// insrts b4 lbls 4 epn rss itms using lbls txt
	// REQ jq,epnRs,tablify
	// 
	// 
	////////// --------- OPT 1  USING ebRS -------------
	function ebRS(tld) {
		epnRs(
			thsBlg_gasJsnPrx,
			tld,
			keywords,
			div,
			thsBlg_epn,
			'',
			4, // numItems
			2, // rows
			2, // cols
			'<a rel="nofollow" target="_blank" href="___LINK___"><b style="font-size:' + ((window.innerWidth > 360) ? '14' : '11') + 'px;line-height:1em;display:block;">___TITLE___</b><img src="___THUMBNAIL___"/></a>' // itemTemplate
		);
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code || '';
		} catch (e) {}
		ebRS(strTLD);
	}).fail(function(error) {
		ebRS('');
	});
	// 
	/////////// --------- OPT 2  USING epnSmpl (no geo req'd) -------------
	// 	epnSmPl(
	// 		div, // divId
	// 		"5cea98c1acd3bc52fe30de5b"  // SmPl adId
	// 	);
	////////////
}

function epnRs(gasID, country, kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// epn rss (GAS)
	// v8 
	// gasID = our GAS prx ID
	// country = 'CA' etc or '';
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery 
	if (document.getElementById(divId)) {
		console.log(country);
		var div = document.getElementById(divId);
		var geo = (country == "") ? '' : '&availableTo=' + country;
		try {
			var prxJsn = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F' + gasID + '/exec';
			//////////// json prx jp plugin by mcpher /////////////
			if (!jQuery().ajaxOrig) {
				jQuery.ajaxOrig = jQuery.ajax;
				jQuery.ajax = function(a, b) {
					function d(a) {
						a = encodeURI(a).replace(/&/g, "%26");
						return prxJsn + "?url=" + a + "&callback=?"
					}
					var c = "object" === typeof a ? a : b || {};
					c.url = c.url || ("string" === typeof a ? a : "");
					var c = jQuery.ajaxSetup({}, c),
						e = function(a, c) {
							var b = document.createElement("a");
							b.href = a;
							return c.crossOrigin && "http" == a.substr(0, 4).toLowerCase() && "localhost" != b.hostname && "127.0.0.1" != b.hostname && b.hostname != window.location.hostname
						}(c.url, c);
					c.proxy && 0 < c.proxy.length && (prxJsn = c.proxy, "object" === typeof a ?
						a.crossDomain = !0 : "object" === typeof b && (b.crossDomain = !0));
					e && ("object" === typeof a ? a.url && (a.url = d(a.url), a.charset && (a.url += "&charset=" + a.charset), a.dataType = "json") : "string" === typeof a && "object" === typeof b && (a = d(a), b.charset && (a += "&charset=" + b.charset), b.dataType = "json"));
					return jQuery.ajaxOrig.apply(this, arguments)
				};
				jQuery.ajax.prototype = new jQuery.ajaxOrig;
				jQuery.ajax.prototype.constructor = jQuery.ajax;
				//////////// json prx jp plugin by mcpher /////////////
			}
			//////////// /json prx jp plugin by mcpher /////////////
			$.ajax({
				crossOrigin: true,
				url: 'https://rest.ebay.com/epn/v1/find/item.rss?keyword=' + kw.replace(/\s+/igm, "%20") + '&sortOrder=BestMatch&programid=1&campaignid=' + cmpId + '&toolid=10039&listingType1=AuctionWithBIN&listingType2=FixedPrice&lgeo=1&condition1=New' + geo + '&feedType=rss',
				success: function(data) {
					var xml = $.parseXML(data.result.trim());
					// console.log(xml);
					var html = '  ';
					var items = [];
					var counter;
					$(xml).find("item").each(function(index) {
						// console.log(index);
						counter = index + 1;
						var el = $(this);
						// 
						var title = el.find("title").text();
						// console.log(title);
						var desc = el.find("description").text();
						var link = el.find("link").text().replace(/http\:/, 'https\:') || '';
						// 
						var thumbnail = desc.match(/src\=['"](htt[^"]*\.jpg)['"]/)[1].replace(/http\:/, 'https\:') || '';
						//// prevent items with no images:
						if (thumbnail.match(/04040_0\.jpg/)) {
							return true; // no continue for jq .each()!!
						}
						// 
						var item = itemTemplate.replace("___LINK___", link).replace("___TITLE___", title).replace("___THUMBNAIL___", thumbnail);
						// 
						items.push([item]);
					});
					if (rand == "rand") {
						shuffle(items);
					}
					html = tablify(items, rows, cols, 'yes');
					div.innerHTML = html;
				}
			});
		} catch (e) {
			console.log('no feed');
		}
	}
	///// helper func ////
	function shuffle(sourceArray) {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));
			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	}
	//////
}

function amzNtv_sync(ad_mode, design, search_phrase, tracking_id, linkid, title, default_category) {
	// v2
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "4"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		// for text_links only
		adDesign +
		// for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function amzFromLbls(keywords, div) {
	// v2
	// req iframeResizer.min.js
	$('#' + div).html(
		'<iframe class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		// '<iframe style="height:450px;width:' + (!detectmob() ? '400' : '200') + 'px;overflow:hidden;display:block" src="https://'+thsBlg_dyn_catcher+'?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	// 
}

function affLocalize(objAmAffIds, strEPNId) {
	// v3
	// req: jq
	function ebLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'AT':
					cntry = "5221-53469-19255-0";
					icep = "229473";
					break;
				case 'AU':
					cntry = "705-53470-19255-0";
					icep = "229515";
					break;
				case 'BE':
					cntry = "1553-53471-19255-0";
					icep = "229522";
					break;
				case 'CA':
					cntry = "706-53473-19255-0";
					icep = "229529";
					break;
				case 'CH':
					cntry = "5222-53480-19255-0";
					icep = "229536";
					break;
				case 'DE':
					cntry = "707-53477-19255-0";
					icep = "229487";
					break;
				case 'ES':
					cntry = "1185-53479-19255-0";
					icep = "229501";
					break;
				case 'FR':
					cntry = "709-53476-19255-0";
					icep = "229480";
					break;
				case 'IE':
					cntry = "5282-53468-19255-0";
					icep = "229543";
					break;
				case 'IN':
					cntry = "4686-53472-19255-0";
					icep = "229550";
					break;
				case 'IT':
					cntry = "724-53478-19255-0";
					icep = "229494";
					break;
				case 'NL':
					cntry = "1346-53482-19255-0";
					icep = "229557";
					break;
				case 'UK':
					cntry = "710-53481-19255-0";
					icep = "229508";
					break;
				default:
					cntry = "711-53200-19255-0";
					icep = "229466";
			}
		}
		var affUrl = url;
		affUrl = affUrl.replace(/\/[0-9]+\-[0-9]+\-19255\-0\//, '/' + cntry + '/');
		affUrl = affUrl.replace(/vectorid\=[0-9]+/, 'icep_vectorid=' + icep);
		return affUrl;
	}
	// 
	function amLocalize(itmId, strTLD) {
		if (strTLD) {
			switch (strTLD) {
				case 'JP':
					strTLD = 'co.jp';
					break;
				case 'GB':
				case 'JE':
				case 'GG':
				case 'IM':
				case 'IE':
				case 'UK':
					strTLD = 'co.uk';
					break;
				case 'CH':
				case 'AT':
					strTLD = 'de';
					break;
				case 'PT':
					strTLD = 'es';
					break;
				default:
					strTLD = (objAmAffIds[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = objAmAffIds[strTLD.toLowerCase()];
		}
		affId = thsBlg_amz.com; ///// default US tag for this site
		// /OneLink Mod
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code;
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// amLocalize is OFF (USING ONELINK) (uncommnt to enable)
					// $(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
			});
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
}

function aead(divId, aid, akey, asize) {
	// v3
	// aid,akey,asize from ae code
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '<span style="display:table;margin:0 auto"><a style="display:none!important" id="' + aid + '"></a></span>';
		if (window.AED_SHOW) {
			window.AED_SHOW({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
		} else {
			window.AED_ONLOAD = window.AED_ONLOAD || [];
			window.AED_ONLOAD.push({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
			if (!document.getElementById("ae-ad-script-$")) {
				var s = document.createElement("script"),
					h = document.getElementsByTagName("head")[0];
				s.id = 'ae-ad-script-$';
				s.charset = "utf-8";
				s.async = !0;
				s.src = "https://i.alicdn.com/ae-game/thirdparty/show-window/index.js";
				h.insertBefore(s, h.firstChild)
			}
		}
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		//
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}
// 
// 
function amzSrchURL(affId, srchQry, categ) {
	// v1
	// optional categ: amz index
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	var b = (typeof categ === 'undefined') ? '' : categ;
	return 'https://www.amazon.com/gp/search?ie=UTF8&tag=' + affId + '&index=' + b + '&keywords=' + srchQry;
}

function epnSrchURL(campId, srchQry) {
	// v1
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=\x35\x35\x37\x35\x31\x35\x30\x38\x30\x38&toolid=10001&campid=' + campId + '&customid=&icep_uq=' + a + '&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg';
}
// 
// 
// 
// ///////////////// NEWS /////////////////
////////////   AS   /////////////
if (thsSiteTyp == "news") {
	//// fi ad resp 4481254246, lu resp 7378369847
	var ad_Id_resp = '4481254246';
	var lu_Id_resp = '7378369847';
	//// NEWS CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '1388187040' : '4341653445';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '8911453841' : '2864920247';
	// 
	//// NEWS BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB AD 1/1
	// prependHTML('leftbar', '<div style="min-height:100px"><div id="as_sb1"></div></div>');
	// asadRespId(
	// 	'',
	// 	'',
	// 	"as_sb1",
	// 	"xyz_as_sb1",
	// 	ad_Id_resp,
	// 	ad_Channel,
	// 	"a"
	// );
	//// NEWS BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB LU 2/2 
	insertAfterHTMLByClass('postbody', '<div style="margin:10px auto 20px"> <div id="as_lb1"></div> </div>');
	asadRespId(
		'<div style="text-align:center">',
		'</div>',
		"as_lb1",
		"xyz_as_lb1",
		lu_Id_resp,
		lu_Channel,
		"link"
	);
	// 
	////////////////////  NEWS   MAINPAGE  ////////////////////
	if (ThsBlg_pg == 'mainpage') {
		// MAINPAGE DTP ad 1/1
		if (!detectmob()) {
			// prependHTML('sidebar_rec', '<div style="min-height:600px;"><div id="as_sb1"></div></div>');
			// prependHTML('leftbar', '<div style="min-height:600px;width:90%;margin:0 10px 0 10px"><div id="as_sb1"></div></div>');
			// asadRespId(
			// 	'<div style="width:100%;">',
			// 	'</div>',
			// 	"as_sb1",
			// 	"xyz_as_sb1",
			// 	"4481254246",
			// 	"1388187040",
			// 	"a"
			// );
		}
		// MAINPAGE MOB ad 1/1
		if (detectmob()) {
			// 
		}
	}
	////////////////////  NEWS   /MAINPAGE  ////////////////////
	// 
	////////////////////  NEWS   ITEMPAGE  ////////////////////
	if (ThsBlg_pg == 'itempage') {
		///
		if (!detectmob()) {
			// NEWS ITEMPAGE DTP ad 1/1
			// insertAfterHTMLByClass('postbody', '<div style="min-height:200px;margin:20px 0;"><div id="as_item_B"></div></div>');
			// prependHTML('leftbar', '<div style="min-height:500px;width:90%;margin:0 10px 0 10px"><div id="as_item_B"></div></div>');
			// asadRespId(
			// 	' ',
			// 	' ',
			// 	"as_item_B",
			// 	"xyz_as_item_B",
			// 	"4481254246",
			// 	"4341653445",
			// 	"a"
			// );
			// NEWS ITEMPAGE DTP LU 1/1
			insertAfterHTMLByClass('dept', '<div style="float:right;  margin:10px 0 20px 20px;"><div style="margin:5px;width:200px;min-height:100px;"><div id="as_inbw"></div></div></div>');
			asadRespId(
				' ',
				' ',
				"as_inbw",
				"xyz_as_inbw",
				"7378369847",
				"2864920247",
				"link"
			);
		}
		// ITEMPAGE MOB ad 1/1
		if (detectmob()) {
			// 
		}
	}
	// ////////////////////  NEWS   ITEMPAGE  ////////////////////
	// 
	//
	//
	// ========== NEWS. JQ READY ==========
	$(function() {
		// AS ids resp_a:3052006247, resp_lu:6991419040
		// ========= mainpage =========
		if (ThsBlg_pg == 'mainpage') {
			// console.log('mainpage');
		}
		// ========= itempage =========
		if (ThsBlg_pg == 'itempage') {
			// 
			///////////////   ITMPG PSTXT REFRMT    ////////////////
			/////  
			// FUNCS
			function srchQryUrl(qry, type) {
				// qry: text str, type: "date" or "rel"
				var a;
				if (type == "date") {
					a = mnuUrlPrefix + qry + archQryURLSuff_dateTrue;
				}
				if (type == "rel") {
					a = mnuUrlPrefix + qry + archQryURLSuff_dateFalse;
				}
				return a;
			}

			function outUrl(url) {
				refStr = 'utm_source=' + ThsBlg_rt_dmn + '&utm_medium=twitter.com/' + ThsBlg_tw_pr;
				var ref = (url.match(/\?/gi)) ? "&" + refStr : "?" + refStr;
				return url + ref;
			}
			// 
			// /FUNCS
			// 
			// wrap according to... in id for use later...
			var acc = $(".postbody").html($(".postbody").html().replace(
				// 
				/([^<>\{\}]*according\s+to\s+)([^\.]*)(\.\s+)/,
				// 
				'<h4><span style="opacity:0.8" id="accordingTo"> $1 <span style="">$2</span> $3 <br/><br/></span></h4>'
			)) || '';
			// 
			// dept label handler
			var dept = $(".dept").text().replace(/([\:]|\sDept\:?)/, "") || $("h1").text().replace(/^(.*)\s+and\s+.*$/m, "$1");
			$('.dept').remove();
			// TOP LABEL
			try {
				$('.singlepost').prepend(
					'<ol class="breadcrumb">  ' +
					'<li><a style="color:#333" href="' + srchQryUrl(dept, 'rel') + '"> ' +
					' <span class="glyphicon glyphicon-tags" aria-hidden="true"></span><span style="text-transform:uppercase;font-size:90%;">&nbsp; ' +
					dept +
					'</span></a> </li>' +
					'</ol>'
				);
			} catch (e) {}
			// dept label handler
			// 
			// KEEP EXEC ORDER FROM HERE!!
			//
			// 
			// 1: OUTGOING LINK
			try {
				//////// OFF FOR FI  ... 
				// var extUrl = $(".postbody a").attr("href");
				// $(".postbody a").attr("href", outUrl(extUrl)); 
			} catch (e) {}
			//
			// 2: TAGS IN PULLQUOTES
			/* /// OFF FOR NOW
			try {
				var tags = "";
				var reltagsContent = $('.rellinks').html();
				// if has <i> else wrap in <i>
				if (reltagsContent.match(/<i>/)) {
					// 
				} else {
					reltagsContent = reltagsContent.replace(/([^@\,]*)\,/g, "</i>$1<i>");
					$('.rellinks').html(reltagsContent);
					// console.log($('.rellinks').html());
				}
				if ($('.rellinks i:eq(0)').text().match(/[a-z]+/)) {
					$('.rellinks i').each(function(index) {
						if ($(this).text().trim().length > 3) {
							tags += '<li><a href="' + srchQryUrl($(this).text().trim(), 'rel') + '">' + $(this).text().trim() + '</a></li>';
						}
					});
					$('.singlepost').wrap('<div class="panel panel-default"><div class="panel-body"></div></div>');
					// use #accordingTo created earlier to insert tags div after that ...
					$("#accordingTo").after('<div style="margin:5px" class="panel panel-default pull-right"><div class="panel-heading"><small>SEE ALSO</small></div> <div class="panel-body"><ul>' + tags + ' </ul></div></div>');
				}
			} catch (e) {}
			*/
			// TAGS IN PULLQUOTES
			// 
			$('.rellinks').remove();
			$('#pagerwrap').before('<div style="clear:both;height:1px;"></div>');
			// 
			// para reformatting
			// 
			// 
			///////////////   ITMPG PSTXT REFRMT    ////////////////
			// 
			// 
		}
		////////////       NEWS. ALL     /////////////
		//
		////////////       NEWS. ALL     /////////////
		// 
	});
	// ///////////////// NEWS /////////////////
}
// 
// 
// ///////////////// /NEWS /////////////////
// 
// 
// /////////////////  STORE   /////////////////
if (thsSiteTyp == "store") {
	///////////    AS    //////////////
	//// fi ad resp 4481254246, lu resp 7378369847
	var ad_Id_resp = '4481254246';
	var lu_Id_resp = '7378369847';
	//// STORE CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '3958521048' : '3958521048';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '5435254248' : '5435254248';
	// 
	//// STORE BOTH MAINPAGE+ITEMPAGE LINKU ON DTP SIDEBAR
	var a = !detectmob() ? prependHTML('leftbar', '<div style="max-width:300px ; max-height:600px; min-height:100px; margin-bottom:10px;"><div id="as_sb1"></div></div>') : '';
	asadRespId(
		'<div style="text-align:center;width:90%;">',
		'</div>',
		"as_sb1",
		"xyz_as_lb1",
		lu_Id_resp,
		lu_Channel,
		"link"
	);
	//// STORE BOTH MAINPAGE+ITEMPAGE LINKU ON MOB
	var sideBysideLU = detectmob() ? '<hr/><div style="margin:10px auto 20px"> <div class="row"><div class="col-sm-9"> <div id="as_lb1"></div> </div> <div class="col-sm-3"> <div id="as_lb2"></div> </div> </div> </div><hr/>' : '';
	if (ThsBlg_pg == 'mainpage') {
		insertAfterHTMLByClass('postbody', sideBysideLU);
	}
	if (ThsBlg_pg == 'itempage') {
		insertBeforeHTMLByClass('blogger-labels', sideBysideLU);
	}
	asadRespId(
		'<div style="text-align:center;width:90%;">',
		'</div>',
		"as_lb1",
		"xyz_as_lb1",
		lu_Id_resp,
		lu_Channel,
		"link"
	);
	//////////////////
	////////
	function amazonCleanUrl(strURL, strTLD, strAffId) {
		// v4 
		if (strURL.match("/(?!/e|st)../([A-Z0-9]{10})") === null) {
			return strURL;
		} else {
			var strAsin = strURL.match("/(?!/e|st)../([A-Z0-9]{10})")[1] || strURL;
			//    return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + strAsin + "/" + strAffId; /// old style
			// return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId; /// clean no params    
			return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId + '&linkCode=osi&th=1&psc=1'; /// api v5 url
		}
	}
	///// store jq /////
	$(function() {
		// ========= ALL =========
		// 
		/// amz url clean
		// *** CLEAN ALL AMZ API URLS to .com/dp/xxx?tag=yyy ***
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href');
			if (aurl.match(/(amazon\.|amzn\.)/igm)) {
				var a = amazonCleanUrl(aurl, "com", thsBlg_amz.com);
				$(this).attr('href', a);
				// console.log(a);
			}
		});
		//// amz url clean
		// 
		// 
		$('.postbody h3 a').each(function(index) {
			$(this).html(' More Details &amp; Prices ');
			$(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(6)').each(function(index) {
			$(this).html(' Buy Now ');
			$(this).addClass('btn btn-success');
		});
		// 
		// 
	});
	// 
}
// ///////////////// /STORE /////////////////
// 
//
/////////////////    DYN_CATCHER   ///////////////////
// 
if (thsSiteTyp == "dyn_catcher") {
	var keywords = (qs.contains("a")) ? qs.get("a") : 'finance money';
	keywords = decodeURIComponent(keywords);
	if (qs.get("s") == "amz") {
		amzNtv_sync(
			'search', // ad_mode, 
			'grid', // design,  "text_links"||"grid"
			keywords, // search_phrase, 
			thsBlg_amz.com, // tracking_id, 
			'06483062a172ded549d69e1886790a34', // linkid, 
			'', // title, 
			'' // default_category
		);
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
// 
// 
// ============== ALL LAST --- WINDOW ON LOAD ===================
// LAST --- WINDOW ON LOAD 
$(window).on("load", function() {
	// 
	// NEWS ITEMPAGE aff 1/1 
	if (thsSiteTyp == "news") {
		if (ThsBlg_pg == 'itempage') {
			var qry4Aff = $('h1').text().replace(/\s+/, " ").replace(/([^\:]*)\:.*/igm, "$1").trim() || 'finance,money';
			$('#sidebar_rec').html('<iframe style="height:600px;width:99%;overflow:hidden;display:block" src="https://www.financializer.com/c/?s=amz&a=' + encodeURIComponent(qry4Aff) + '" scrolling="no" frameborder="0" border="0" ></iframe></div>');
		}
	}
	// 
	///// STORE /////
	// 
	if (thsSiteTyp == "store") {
		// 
		if (ThsBlg_pg == 'itempage') {
			// --- AFF IN SIDEBAR
			// DTP STR AFF SB
			if (!detectmob()) {
				$('#rightbar').prepend('<div  class="ldng_16_3x" id="amzSB_T"></div>');
				amzFromLbls(thsBlg_amz_defKW, "amzSB_T");
			}
			// ---AFF FROM LABLES
			$('.blogger-labels').before('<hr/><h4>If you liked it, ALSO TRY:</h4><hr/><div  class="ldng_16_3x"  id="ebRSBtm_1"></div><hr/><div class="ldng_16_3x"  id="ebRSBtm_2"></div><hr/>');
			var kw = $('.blogger-labels').text().replace(/\s+/igm, " ").trim().replace(/(labels\:)/igm, "").trim();
			console.log(kw);
			if ($('.postbody h3 a').attr('href').match(/amazon\./)) {
				kw = encodeURIComponent(kw.replace(/, /g, " ").trim());
				epnFromLbls(kw, "ebRSBtm_1");
				amzFromLbls(kw, "ebRSBtm_2");
			} else {
				amzFromLbls(kw, "ebRSBtm_1");
				epnFromLbls(kw, "ebRSBtm_2");
			}
			// ---/AFF FROM LABLES
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
				$('.iframeresize_class').iFrameResize();
			});
		}
		// 
		///// HNDLE BRKN IMGS - v2
		// req: epnSrchURL()
		$('.postbody a img').each(function(index) {
			if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
				var imgSrc = $(this).attr('src') || '';
				var redirURL = '';
				var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();
				ga_evCatVal('store', 'err_NoAffImg:U: ' + imgSrc);
				if (imgSrc.match(/amazon/)) {
					redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
				} else {
					redirURL = epnSrchURL(thsBlg_epn, redirQuery);
				}
				// 
				$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
				// 
				$("#mssngImgRedir_" + index).click(function() {
					ga_evCatVal('store', 'inf_btnLocItmNw:U: ' + redirURL);
				});
			}
		});
		/// HNDLE BRKN IMGS
		// 
		// 
		// ** ebay ebLocalize IS >>ON<< in affLocalize() **
		// ** amazon amLocalize IS >>OFF<< in affLocalize() **
		affLocalize(thsBlg_amz, thsBlg_epn);
		// 
		if (ThsBlg_pg == 'itempage') {
			insertAfterHTMLByClass('postbody', '<div style="display:table;margin:10px auto;" id="addths_rec"></div>');
			addthisN('addths_rec');
		}
	}
	// 
	///// /STORE /////
	// 
});
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
// 
// 
//