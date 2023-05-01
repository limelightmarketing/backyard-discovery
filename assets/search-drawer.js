function handleSearchDrawer() {
    var searchButton = document.getElementById('headerSearchSubmit');
    var searchInput = document.getElementById('headerSearchInput');
    var headerMenu = document.querySelector('.header-menu');
	var overlay = jQuery('#overlay');
  
    searchButton.addEventListener('click', function(e) {
        if (searchInput.classList.contains('active')) {
        } else {
            e.preventDefault();
            searchInput.classList.add('active');
            headerMenu.classList.add('search-is-open');
          	overlay.show();
        }
    })
}

function closeSearchDrawer() {
    var header = document.querySelector('.header-desktop');
    var main = document.querySelector('main');
  
	var overlay = jQuery('#overlay');
    var searchButton = document.getElementById('headerSearchSubmit');
    var searchInput = document.getElementById('headerSearchInput');
    var headerMenu = document.querySelector('.header-menu');

    main.addEventListener('click', function() {
         hideSearchDrawer(overlay, searchInput, headerMenu)

    })
}

function overlayHideDrawer() {
    var header = document.querySelector('.header-desktop');
    var main = document.querySelector('main');
  
	var overlay = jQuery('#overlay');
    var searchButton = document.getElementById('headerSearchSubmit');
    var searchInput = document.getElementById('headerSearchInput');
    var headerMenu = document.querySelector('.header-menu');

    overlay.on('click', function() {
        hideSearchDrawer(overlay, searchInput, headerMenu)
    })
}

function hideSearchDrawer(overlay, searchInput, headerMenu) {
	if (searchInput.classList.contains('active')) {
            searchInput.classList.remove('active');
          	overlay.hide();
            setTimeout(function() {
                headerMenu.classList.remove('search-is-open');
            }, 300)
        }
}


overlayHideDrawer();
handleSearchDrawer();
closeSearchDrawer();
