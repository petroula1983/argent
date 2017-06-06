// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>DavidGilbert Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 99999</b>');
	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>DoreneBeaudry19 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> AnoukMetivier Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 99999</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>Duad1945 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> RoyaleBourassa  Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>AudaBourget07 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>KonstBR Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>IjTommy4 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>LanceClash22 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>MaslinT21 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>GamerJohn201 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000 et <img src="http://onlinegenerator.org/gta5generateur/images/RP.png" width="15" height="17"/>- 100000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>TheKingofCOC2014 Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 100000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> GDufresneC  Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> Gamer0102  Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> GabrielleJodion33  Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> VernonSalmonsd32  Généré <img src="http://onlinegenerator.org/gta5generateur/images/$.png" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 25000);

}); 