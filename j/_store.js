/// store.financializer.com js, wip: remove news., www. code 
/// www.financializer.com/j/store.js
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
	'es': 'financializeres-21',
	'def_kw': 'money',
	'def_kw_2': 'money',
	'def_cat': 'Books',
	'def_cat_2': 'Books',
	'def_node': '', //'9003130011',
	'def_node_2': '', //'9003130011',
};
thsBlg_as = '\x63' + 'a' + '-\x70\x75b-' + (1873488713147657 + 528760035384255 + 3287954364827809);
var ad_Id_resp = '4481254246';
var ad_Id_fixed = '5482333332';
var lu_Id_resp = '7378369847';
thsBlg_epn = "5337817697";
thsBlg_epn_epnSmPl = "605f11506c98752d0e2ac45e"; //// ad id of epn smrt plcmnt
thsBlg_dyn_catcher = "www.financializer.com/c/";
thsBlg_img_cdn = "www.financializer.com/img/";
thsBlg_gasJsnPrx = "AKfycbxTy7YPX7Wq9tjYx3Ad2QjCdSAT3jnIkmmM0cz0D_e2ZPWrWM0";
thsBlg_reportProductForm = '1FAIpQLSeDsL3kKlbghsmvQQUZEemR3wEH22nscf5uZlz7WOim-R1hfg'; // gd form
// 
////
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//' + thsBlg_img_cdn + 'ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
// 
// ========== functions ==========
function epn_rover2newURL(url, campid) {
	//// v1 
	var url = url.toString();
	return "https://www.ebay.com/itm/" + url.match(/item\=([0-9]+)/im)[1] + "?mkrid=711-53200-19255-0&siteid=0&mkcid=1&campid=" + campid + "&toolid=10044&customid=&mkevt=1";
}
/// --- OFF: AUTO ON ----
///// MODDED FOR 

// 2023-10-10 all manual AS off
function asadRespId() {}

function _asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	if (bnndQry == "yes") {
		return;
	}
	// v11 - adFormat var
	if (!document.getElementById(divId)) {
		// 
	} else {
		if (typeof orient === 'undefined' || orient == "") {
			var orient = "";
		}
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
		var adFormat = (a == "") ? '' : 'data-ad-format="' + a + '"';
		var divWidth = typeof divWidth !== 'undefined' ? 'width:' + divWidth + ';' : '';
		var divHeight = typeof divHeight !== 'undefined' ? 'height:' + divHeight + ';' : '';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { ' + divWidth + ' ' + divHeight + ' }' +
				'</style>' +
				prefix +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' data-ad-client="' + thsBlg_as + '" ' +
				' data-ad-slot="' + slot + '" ' +
				' ' + adFormat + ' ></ins> ' +
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


function addthisN(){}

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
					// console.log('Audience Network ad loaded');
					if (format == "native") {
						document.getElementById('ad_root').style.display = 'block';
					}
				}
			);
			FB.Event.subscribe(
				'ad.error',
				function(errorCode, errorMessage, placementId) {
					// console.log('Audience Network error (' + errorCode + ') ' + errorMessage);
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

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = 250) {
	// v2
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
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:hidden;">' + // epn won't show if less than 300px! only way to crop for smaller widths
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
	// v7 -  epnSmPl now (epn rss kaput)
	epnSmPl(div, thsBlg_epn_epnSmPl, keywords);
}

function epnRs(gasID, country, kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// epn rss (GAS)
	// v8 
	// gasID = our GAS prx ID
	// country = 'CA' etc or '';
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery 
	if (document.getElementById(divId)) {
		// console.log(country);
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
						try {
							var thumbnail = desc.match(/src\=['"](htt[^"]*\.jpg)['"]/)[1].replace(/http\:/, 'https\:');
						} catch (e) {
							var thumbnail = "";
						}
						// 
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
			// console.log('no feed');
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
// -- amzAdKW 1/3 (in main script)
function amzAdKW(div, arr_amzNtv_sync_options) {
	// v4
	// req /c/ dynamic catcher, amzNtv_sync(), jq, iframeResizer.min.js
	var arr_amzNtv_sync_options = encodeURIComponent(JSON.stringify(arr_amzNtv_sync_options));
	$('#' + div).html(
		'<iframe onload="iFrameResize()" class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + arr_amzNtv_sync_options + '"  scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
		$('.iframeresize_class').iFrameResize();
	});
}
// -- amzAdKW 2/3 (in main script)
function amzNtv_sync(ad_mode, design, numRows, search_phrase, tracking_id, linkid, title, default_category, browseNode) {
	// v5
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var numRows = (numRows === '') ? "5" : numRows;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "' + numRows + '"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	var def_browseNode = (browseNode === '') ? '' : 'amzn_assoc_default_browse_node = "' + browseNode + '";';
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
		def_browseNode +
		adDesign + // for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function amzFromLbls(keywords, cat, type, div) {
	// v4 
	amzAdKW(div, [
		"search",
		type, // "text_links"||"grid"
		"3", // num of rows if text_links above, eg "3" (def:"5")
		keywords, // keywords, // search phrase
		thsBlg_amz.com, // aff id
		'064830' + '62a' + '172ded549d69' + 'e' + '1886790a34', // link id (def or create new in dashboard)
		"", // title (def: blank)
		cat, // category (def: All)
		thsBlg_amz.def_node, // browseNode (opt, if category given)
	]);
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

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
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
	// v2 
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://www.ebay.com/sch/i.html?_ex_kw=&_mPrRngCbx=1&_nkw=' + a + '&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=' + campId + '&customid=&toolid=10001&mkevt=1';
}

function loadingDoneBar() {
	///// v2 
	//// req bootstrap
	return '<div id="loadingDoneBar"> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}
// 
// 
// 

// 
// 
// ///////////////// /NEWS /////////////////
// 
// 
// /////////////////  STORE   /////////////////
if (thsSiteTyp == "store") {
	insertAfterHTML('jadeHeader', loadingDoneBar());
	///////////    AS    //////////////
	//// fi ad resp 4481254246, lu resp 7378369847
	//// STORE CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '3958521048' : '3958521048';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '5435254248' : '5435254248';
	// 
	//// STORE BOTH MAINPAGE+ITEMPAGE
	insertAfterHTML('cse_container', '<div id="asOnTop"></div>');
	asadRespId(
		'', // prefix
		'', // postfix
		"asOnTop", // div id
		"xyz_asOnTop", // xyz_ + div id
		ad_Id_resp, // slot
		ad_Channel, // channel
		'', // orient OR ""
		'320px',
		'100px'
	);
	// 
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
		try {
			$('.postbody a').each(function(index) {
				var aurl = $(this).attr('href').trim();
				if (aurl.match(/(amazon\.|amzn\.)/igm)) {
					var a = amazonCleanUrl(aurl, "com", thsBlg_amz.com);
					$(this).attr('href', a);
					// console.log(a);
				}
			});
		} catch (e) {}
		////
		//// epn new "track urls" instead of rover
		try {
			$('.postbody a').each(function(index) {
				var aurl = $(this).attr('href').trim();
				if (aurl.match(/rover\.ebay/im)) {
					// console.log(aurl);
					var a = epn_rover2newURL(aurl, thsBlg_epn)
					$(this).attr('href', a);
					// console.log(a);
				}
			});
		} catch (e) {}
		/////
		// 
		try {
			$('.postbody h3 a').each(function(index) {
				$(this).html(' More Details &amp; Prices ');
				$(this).addClass('btn btn-info');
			});
			$('.postbody a:nth-child(6)').each(function(index) {
				$(this).html(' Buy Now ');
				$(this).addClass('btn btn-success');
			});
		} catch (e) {}
		/////
		$('#loadingDoneBar').remove();
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
	// -- amzAdKW 3/3 (in main script)
	if (qs.get("s") == "amz") {
		$('head').append('<style>body a {color:blue!important;} .amzn-native-product-text {border-bottom:dotted 1px #aaa!important; margin-bottom:10px!important} .amzn-native-content li a {font-size:16px; line-height:1em} .amzn-native-product-offer-price{display:none!important}</style>');
		var a = JSON.parse(decodeURIComponent(qs.get("a")));
		amzNtv_sync(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
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
			// var qry4Aff = $('h1').text().replace(/\s+/, " ").replace(/([^\:]*)\:.*/igm, "$1").trim() || 'finance,money';
			// $('#sidebar_rec').html('<iframe style="height:600px;width:99%;overflow:hidden;display:block" src="https://www.financializer.com/c/?s=amz&a=' + encodeURIComponent(qry4Aff) + '" scrolling="no" frameborder="0" border="0" ></iframe></div>');
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
			// if (!detectmob()) {
			$('#rightbar').prepend('<div  class="ldng_16_3x" id="amzSB_T"></div>');
			amzFromLbls(thsBlg_amz.def_kw, thsBlg_amz.def_cat, ((!detectmob()) ? "grid" : "text_links"),
				"amzSB_T");
			// }
			// ---AFF FROM LABLES

			$('.blogger-labels').before(`

			<div style="clear:both;"></div>

			<div style="text-align:right;">

			<a style="font: normal 12px/1em Arial;" rel="nofollow" href="https://docs.google.com/forms/d/e/${thsBlg_reportProductForm}/viewform?usp=sf_link">

			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report this item
			</a>
			</div>

			<div style="clear:both;"></div>
			<hr/>
			<h4>If you liked it, ALSO TRY:</h4>
			<div  class="ldng_16_3x"  id="ebRSBtm_1"></div>
			<hr/>
			<div class="ldng_16_3x"  id="ebRSBtm_2"></div>
			<hr/>


			`);

			var kw = $('.blogger-labels').text().replace(/\s+/igm, " ").trim().replace(/(labels\:)/igm, "").trim();
			// console.log(kw);
			try {
				if ($('.postbody h3 a').attr('href').match(/amazon\./)) {
					epnFromLbls(kw, "ebRSBtm_1"); // kaput
					amzFromLbls(kw, thsBlg_amz.def_cat_2, "grid", "ebRSBtm_2");
				} else {
					amzFromLbls(kw, thsBlg_amz.def_cat_2, "grid", "ebRSBtm_1");
					epnFromLbls(kw, "ebRSBtm_2"); // kaput
				}
			} catch (e) {}
			// ---/AFF FROM LABLES
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
				$('.iframeresize_class').iFrameResize();
			});
		}
		// 
		///// HNDLE BRKN IMGS - v2
		// req: epnSrchURL , amzSrchURL, ga_evCatVal
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

				//// EPN AD IF BRKN IMG
				$('.panel-footer').remove();
				$('#brknimg').after('<div id="epnSmPl_brknimg"></div>')
				epnSmPl("epnSmPl_brknimg", thsBlg_epn_epnSmPl);

				// 

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