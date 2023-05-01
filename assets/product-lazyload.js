function ScrollExecute() {
    if(jQuery(document).height() - 800 < (jQuery(document).scrollTop() + jQuery(window).height())) {
      scrollNode = jQuery('#more').last();    
      scrollURL = jQuery('#more a').last().attr("href");
      var nextPage = jQuery('#more a').data('current-page') + 1;
      if(scrollNode.length > 0 && scrollNode.css('display') != 'none') {
         jQuery.ajax({
                type: 'GET',
                url: scrollURL,
                beforeSend: function() {
                    scrollNode.clone().empty().insertAfter(scrollNode).append('<i class="fa fa-2x fa-spinner fa-spin"></i>');
                    scrollNode.hide();
                },
                success: function(data) {
                    scrollNode.next().remove();
                    var products = jQuery(data).find("#Collection > ul li");
                    var bvScript = jQuery(data).find("#bazaarVoicePage" + nextPage).html();

                    products.insertBefore( jQuery("#product-list-foot") );
                    eval(bvScript);                   
                },
                dataType: "html"
            });
        }
    }
  }

  jQuery(document).ready(function () {
   jQuery(window).scroll(function(){
     jQuery.doTimeout( 'scroll', 200, ScrollExecute);
    });
  });