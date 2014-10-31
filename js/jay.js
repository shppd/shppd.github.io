define(["framework7.min"],function() {
	var F7 = new Framework7({
		animateNavBackIcon: true
	});
	var $7 = Framework7.$;
	// Add view
	var mainView = F7.addView('.view-main', {
		dynamicNavbar: true
	});
	
	var mySlider = F7.slider('.slider-container', {
		pagination:'.slider-pagination'
	});
	
	return {
		init	:F7,
		$7		:$7,
		sider	:mySlider,
		mainView:mainView,
		page_slider:mySlider
	}
});