$(document).ready(function() {
	$ludyTrigger = $('.ludy-trigger');
	$ludyWrapper = $('.ludy-wrapper');

	$ludyTrigger.on('click', function () {
		$(this).slideUp(300, function () {
			$ludyWrapper.slideDown(300);
		});
	});
});