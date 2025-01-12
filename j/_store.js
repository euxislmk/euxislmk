/// store.financializer.com js, wip: remove news., www. code 
/// www.financializer.com/j/store.js
///

// ====== ::WESBITE:: ONLY ============

// -------- FI ONLY VARS ---------

thsBlg_dom = "store.financializer.com";
thsBlg_amz = {
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
	'def_node': '',
	'def_node_2': '',
};
thsBlg_cse = "0\x30\x32\x34\x31\x318496\x31\x34\x34\x38\x30247741:7spp7a3flfe";
thsBlg_cse_adchannel = "2305332773";
thsBlg_epn = "5337817697";
thsBlg_epn_epnSmPl = "605f11506c98752d0e2ac45e";
thsBlg_zzl = "";
thsBlg_dyn_catcher = "www.financializer.com/c/";
thsBlg_img_cdn = "www.financializer.com/img/";
thsBlg_gasJsnPrx = "AKfycbxTy7YPX7Wq9tjYx3Ad2QjCdSAT3jnIkmmM0cz0D_e2ZPWrWM0";
thsBlg_reportProductForm = "1FAIpQLSeDsL3kKlbghsmvQQUZEemR3wEH22nscf5uZlz7WOim-R1hfg";
thsBlg_menulinks = [];

// -------- /FI ONLY VARS ---------

// -------- FI ONLY FUNCS ---------

// -------- /FI ONLY FUNCS ---------

// ====== ::WESBITE:: ONLY  ============

// 
// 

// ======= ALL COMMON FROM BELOW ==============

// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
//
// 

// 
// 
// 
// ========== FUNCTIONS ==========

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function showLabels(json) {
	var label = json.feed.category;
	var list = $('<ul class="list-unstyled"></ul>');

	for (var i = 0; i < label.length; i++) {
		var listItem = $('<li></li>');
		var link = $('<a></a>')
			.attr('href', "https://" + thsBlg_dom + '/search/label/' + encodeURIComponent(label[i].term))
			.text(label[i].term);
		listItem.append(link);
		list.append(listItem);
	}
	$('#allLabels').append(list);
}

function allBloggerLabels() {
	// req jquery, showLabels()
	try {
		$.getScript("https://" + thsBlg_dom + '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels');
	} catch (e) {}
}

function handleBrokenImages() {
	///// HNDLE BRKN IMGS - v2
	// req: epnSrchURL()
	$('.postbody a img').each(function(index) {
		if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
			var imgSrc = $(this).attr('src') || '';
			var redirURL = '';
			var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();

			if (imgSrc.match(/amazon/)) {
				redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
			} else {
				redirURL = epnSrchURL(thsBlg_epn, redirQuery);
			}
			// 
			$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
			// 
			$("#mssngImgRedir_" + index).click(function() {

			});

			// 

		}
	});
	/// HNDLE BRKN IMGS
}

// -------- AMZ/EPN FUNCS ----------

function epn_rover2newURL(url, campid) {
	//// v1 
	var url = url.toString();
	return "https://www.ebay.com/itm/" + url.match(/item\=([0-9]+)/im)[1] + "?mkrid=711-53200-19255-0&siteid=0&mkcid=1&campid=" + campid + "&toolid=10044&customid=&mkevt=1";
}

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

// -------- /AMZ/EPN FUNCS ----------

function gCSE(cx, ch) {

	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;

	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);

	$('#cse_searchbox').append("<gcse:searchbox adchannel='" + ch + "' queryParameterName='s'></gcse:searchbox>");
	$('#cse_searchresults').append("<gcse:searchresults></gcse:searchresults>");
}

function menulinks() {
	try {
		var menulinks = thsBlg_menulinks.flat(Infinity).join(' ');
		$('#logoheader').append('<div id="lh1">' + menulinks + '</div>');
	} catch (e) {}
}

// ========== /FUNCTIONS ==========

// 
// 

// ============================
// ============================
// ============================
// ============================
// ============================
// ============================
// ========== EXEC ============
// ============================
// ============================
// ============================
// ============================
// ============================
// ============================

$(function() {
	// ========= ALL =========

	menulinks();

	gCSE(thsBlg_cse, thsBlg_cse_adchannel);

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
		$('.postbody h3').each(function(index) {
			// $(this).html(' More Details &amp; Prices ');
			$(this).remove();
			// $(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(5)').each(function(index) {
			$(this).html(' Price &amp; details &#9658; ');
			$(this).addClass('btn btn-success');
			$(this).attr({
				'target': '_blank'
			});
		});
	} catch (e) {}
	// 

	$('.blogger-labels').before(`

			<div style="clear:both;"></div>

			<div style="text-align:right;">

			<a class="reportthis" rel="nofollow" href="https://docs.google.com/forms/d/e/${thsBlg_reportProductForm}/viewform?usp=sf_link">

			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report Item
			</a>
			</div>


			`);
	// 
	allBloggerLabels();
	// 
});

// ============== ALL LAST --- WINDOW ON LOAD ===================

$(window).on("load", function() {

	handleBrokenImages();

}); /// window onload
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
// 
// 
//