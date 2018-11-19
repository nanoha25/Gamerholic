$(document).ready(function() {
 
  $("#owl-main").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 5000,
     navigation : true,
    navigationText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"
],
      transitionStyle : "fade"
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
 
});


$(document).ready(function() {
 
  var owl = $("#owl-hot");
 
  owl.owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 3000,
    stopOnHover: true,
    pagination: false,
    items: 5
  });
 
  // Custom Navigation Events
  $(".owl-hot-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".owl-hot-prev").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() {
 
  var owl = $("#owl-new");
 
  owl.owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 3000,
    stopOnHover: true,
    pagination: false,
    items: 5
  });
 
  // Custom Navigation Events
  $(".owl-new-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".owl-new-prev").click(function(){
    owl.trigger('owl.prev');
  })
});


$(document).ready(function() {
 
  var owl = $("#Featured_Collection");
 
  owl.owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 3000,
    stopOnHover: true,
    pagination: false,
    items: 4,
    margin:5,
      navigation : true,
      navigationText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"
]
  });
 
  // Custom Navigation Events
  $(".owl-new-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".owl-new-prev").click(function(){
    owl.trigger('owl.prev');
  })
});