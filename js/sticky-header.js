$(function() {
	var $window = $(window),
		page = 'home';
	if (!!~window.location.pathname.indexOf('careers'))
		page = 'careers';
	else if (!!~window.location.pathname.indexOf('research') || !!~window. location.pathname.indexOf('oas'))
		page = 'cahps';

	if (page) {
		$.get('/assets/templates/sticky-'+page+'.html', function(data) {
			
			var $body = $(document.body),
				$sh = $('<div>', {
					id: 'sticky-home',
					'class': 'sticky-header'
				}).html(data);
				
			$body.append($sh);
			
			/*
			$window.scroll(function() {
				var isScrolled = $body.scrollTop() > $('header').height(),
					isOpen = $sh.is(':visible')
				if (isScrolled && !isOpen) {
					$sh.fadeIn(100);
				} else if (!isScrolled && isOpen) {
					$sh.fadeOut(200);
				}
			});
			*/
			
			//var duration = 200;
			//.stop(true, true).fadeIn({ duration: 200, queue: false }).css('display', 'none').slideDown(duration);    
			//.stop(true, true).fadeOut({ duration: 200, queue: false }).slideUp(duration);
		});
	}
});