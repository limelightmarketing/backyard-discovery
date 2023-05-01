
$( function() {
//   var filterWidth = jQuery('.filters-toolbar__item-child');

  $( "#SortBy" ).selectmenu();
  
  $('#SortBy').on('selectmenuchange', function(event, ui) {
      var newUrl = window.location.pathname;
      var url = newUrl + '?' + 'sort_by=' + ui.item.value;  
        window.location.href = url;
  });

});
