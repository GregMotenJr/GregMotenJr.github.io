/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

    //controls for audio
	var status = 0;
	function Play(music, id) {
	    var audio = $("#" + id);
	    if (status == 0 || status == 2) {
	        if (status == 0) audio.attr("src", music);
	        audio[0].play();
	        $("#play").attr("class", "glyphicon glyphicon-pause aligned")
	        status = 1;
	    } else if (status == 1) {
	        audio[0].pause();
	        $("#play").attr("class", "glyphicon glyphicon-play aligned")
	        status = 2;
	    }
	}
	function Stop(music, id) {
	    var audio = $("#" + id);
	    audio.attr("src", '');
	    $("#play").attr("class", "glyphicon glyphicon-play aligned")
	    status = 0;
	}
	function Restart(music, id) {
	    var audio = $("#" + id);
	    audio.prop("currentTime", 0)
	}
	function VolumeUp(music, id) {
	    var audio = $("#" + id);
	    var volume = $("#" + id).prop("volume") + 0.1;
	    if (volume > 1) volume = 1;
	    $("#" + id).prop("volume", volume);
	}
	function VolumeDown(music, id) {
	    var audio = $("#" + id);
	    var volume = $("#" + id).prop("volume") - 0.1;
	    if (volume < 0) volume = 0;
	    $("#" + id).prop("volume", volume);
	}
	function Forward5(music, id) {
	    var audio = $("#" + id);
	    audio.prop("currentTime", audio.prop("currentTime") + 5);
	}
	function Backward5(music, id) {
	    var audio = $("#" + id);
	    audio.prop("currentTime", audio.prop("currentTime") - 5);
	}
	function Forward1(music, id) {
	    var audio = $("#" + id);
	    audio.prop("currentTime", audio.prop("currentTime") + 1);
	}
	function Backward1(music, id) {
	    var audio = $("#" + id);
	    audio.prop("currentTime", audio.prop("currentTime") - 1);
	}


})(jQuery);
