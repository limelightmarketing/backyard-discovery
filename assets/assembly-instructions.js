$(document).ready(function() {
    $(".download-pdf").on("click",function(e){
      e.preventDefault();
      var win = window.open($(this).parent().find('.manual-pdfs').val(), "_blank");
      if (win) {
          //Browser has allowed it to be opened
          win.focus();
      } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
      }
    });
    
    $(document).click(function(event) {
      if(event.target.className.indexOf("assembly-filter-button") == -1){
        if(!$(event.target).closest('.assembly-filter').length) {
          $(".assembly-filter-wrapper").hide();
          $(".assembly-filter").hide();
          $(".assembly-filter-curtain").hide();
        }
      }
    });

    $(".assembly-filter-button").click(function(e){
      e.preventDefault();
      $(".assembly-filter-wrapper").css("top", $(window).scrollTop());
      $(".assembly-filter-wrapper").fadeIn();
      $(".assembly-filter").fadeIn();
      $(".assembly-filter-curtain").fadeIn();
    });
    
    $(".assembly-filter-items a").click(function(e) {
      e.preventDefault();
      $(".installation-videos-wrapper").hide();
      $("." + $(this).attr("target") + " .lazy").lazy({
        bind: "event",
        delay: 0
      });
      $(".assembly-filter-items li").removeClass("active")
      $(this).parent().addClass("active");
      if ($(this).attr("target") == "all") {
        $(".collection").show();
      }
      else {
        $(".collection").hide();
        if ($(this).attr("target") == "backyard-discovery-swing-sets") {
          $(".backyard-discovery-swing-sets").show();
        }
        if ($(this).attr("target") == "patio-products") {
          $(".patio-products").show();
        }
        if ($(this).attr("target") == "wooden-playhouses") {
          $(".wooden-playhouses").show();
        }
        if ($(this).attr("target") == "swing-set-accessories") {
          $(".swing-set-accessories").show();
        }
        if ($(this).attr("target") == "nla") {
          $(".nla").show();
        }
        $(".assembly-filter-wrapper").hide();
        $(".assembly-filter").hide();
        $(".assembly-filter-curtain").hide();
        
      }
      if ($(".filter-mobile-container").hasClass("active")) {
       	 $(".filter-mobile-container").removeClass("active");
      }
      $('html, body').animate({
        scrollTop: $(".support-menu-wrapper").offset().top - $(".desktop-header").height() - 100
      }, 500);
    });
    
    $("#page .menu-mobile-button").click(function (event) {
      event.preventDefault();
      $(this).hide();
      $(".menu-mobile").show();
      $(".canvas_overlay").addClass( "active" );
    });
    $("#page .menu-mobile-close, .canvas_overlay, .menu-mobile-content a").click(function (event) {
      event.preventDefault();
      $(".menu-mobile").hide();
      $(".menu-mobile-button").show();
      $(".canvas_overlay").removeClass( "active" );
    });
  });

	// video data
  	// var installationVids = [
    //   {vidId:"AumBgirJE7w",vidTitle:"Easy To Build",vidThumbnail:"",vidDuration:":56"},
    //   {vidId:"AumBgirJE7w",vidTitle:"Tools Required",vidThumbnail:"",vidDuration:"1:15"},
    //   {vidId:"RQDHMlP83i4",vidTitle:"Floor Frame",vidThumbnail:"",vidDuration:"1:36"},
    //   {vidId:"XRNKXFioI24",vidTitle:"Floor Sheathing",vidThumbnail:"",vidDuration:"1:10"},
    //   {vidId:"pQ8cpp8PamU",vidTitle:"Leveling",vidThumbnail:"",vidDuration:":46"},
    //   {vidId:"5-INTJz_R0g",vidTitle:"Walls",vidThumbnail:"",vidDuration:"5:05"},
    //   {vidId:"FS0YmNCCoBc",vidTitle:"Rafters and Trim",vidThumbnail:"",vidDuration:"2:03"},
    //   {vidId:"NoGw3L2-TKA",vidTitle:"Roof Sheathing",vidThumbnail:"",vidDuration:"1:24"},
    //   {vidId:"5XZ4acE2wiU",vidTitle:"Exterior Components",vidThumbnail:"",vidDuration:":51"},
    //   {vidId:"6fQU_2VChiA",vidTitle:"Roof Shingles",vidThumbnail:"",vidDuration:"2:14"},
    //   {vidId:"b84F9ekFrHk",vidTitle:"Door Components",vidThumbnail:"",vidDuration:"1:28"},
    //   {vidId:"LyL6DPRUlQ0",vidTitle:"Completion ",vidThumbnail:"",vidDuration:":19"},
  	// ];
  	// var videoCarousel = new VideoCarousel("vid-iframe","vid-thumbnails", "maintenance-video", installationVids);
