var supportMenuWrapper = jQuery('.support-menu-top-bar__wrapper');
var supportMenu = jQuery('.support-menu-top-bar__menu');
var overlay = jQuery('#overlay');

supportMenuWrapper.on('click', function() {
    supportMenu.stop(true).slideToggle(300);
  	overlay.show();
});

overlay.on('click', function() {
	supportMenu.stop(true).slideUp(300);
  	overlay.hide();
});





