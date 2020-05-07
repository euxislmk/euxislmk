ThsBlg_cse = '0' + '02' + '\x34\x31\x3184' + '961\x34\x34802' + '47\x37\x341:rawi-j2vwvk';


function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {}

function _asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	// v8 - orient takes "link" for resp linkunits
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
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '99%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '99%';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + ThsBlg_as + '" ' +
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

function asadRespClass(prefix, postfix, divClass, idTxt, slot, channel, orient, divWidth, divHeight) {}

function _asadRespClass(prefix, postfix, divClass, idTxt, slot, channel, orient, divWidth, divHeight) {
	// v8 - orient takes "link" for resp linkunits
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		var a = "";
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "link") {
			a = "link"
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
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '99%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '99%';
		try {
			document.getElementsByClassName(divClass)[0].innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + ThsBlg_as + '" ' +
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

// ================ EXEC ==================

// AS 
// lu 7378369847
// asadRespId(
// 	'<div style="text-align:left; width:100%;>',
// 	'</div>',
// 	"as_T",
// 	"xyz_as_T",
// 	"7378369847",
// 	"8911453841",
// 	"link"
// );

// asadRespId(
// 	'<div style="margin:10px auto; text-align:center; width:95%;background-color:#5CBF68;border-radius:5px;padding:10px;">',
// 	'</div>',
// 	"as_M",
// 	"xyz_as_M",
// 	"4481254246",
// 	"1388187040",
// 	"a"
// );






// ================ /EXEC ==================
