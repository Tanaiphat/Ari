// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("-show");
  } else {
    document.getElementById("navbar").classList.remove("-show");
  }
}

// JQuery

jQuery(document).ready(function($) {

  // Video Presentation

  $('#index-video').parent().click(function () {
    if($(this).children("#index-video").get(0).paused){
        $(this).children("#index-video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children("#index-video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
  });

  // Hover Megamenu

  $( ".top-menu" ).hover(
    function() {
      $( '.active' ).removeClass('active');
      $( this ).addClass('active');
      $( this ).find('.mega-menu-content').addClass('active');
    }, function() {
      $( this ).removeClass('active');
      $( this ).find('.mega-menu-content').removeClass('active');
      $( '.main' ).addClass('active');
    }
  );

  // Mini Cart Sidebar

  let menu = $("#mini-cart-sidebar");

  $(".-minic").click(function() {
    $(menu).addClass('active');
  });

  $(".close-btn").click(function() {
    $(menu).removeClass('active');
    $('.home').removeClass('mm-ocd-opened');
  });

  // burger menu

  let menu_burger_sidebar = $(".menu-burger-sidebar");

  $(".menu-burger").click(function() {
    $(menu_burger_sidebar).addClass('active');
  });

  $(".close-btn").click(function() {
    $(menu_burger_sidebar).removeClass('active');
    $('.mm-ocd').removeClass('mm-ocd--open');
  });

  $(".mm-spn span").click(function() {
    $('.mm-spn.mm-spn--navbar').removeClass('mm-main');
  });

  // Input Counter

  $('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  
  $('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // Acccordion

  $('.acc__title').click(function(j) {
    let dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
  
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
  
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  // Mmenu Library

  let mmenu = new MmenuLight(
    document.querySelector( '#menu-mb' ),
    'all'
  );

  let navigator = mmenu.navigation({
    selectedClass: 'Selected',
    theme: 'dark',
    title: ''
  });

  let drawer = mmenu.offcanvas({
    position: 'right'
  });

  //	Open the menu.

  let el = document.querySelector( 'a[href="#menu-mb"]' );

  if(el){
    el.addEventListener( 'click', evnt => {
      evnt.preventDefault();
      drawer.open();
    });
  }

  $('.mm-spn--open span').click(function () {
    $('#menu-mb').removeClass('mm--main');
  });

  let menu_mb = document.getElementById('menu-mb');

  let observer = new MutationObserver(function(mutations) {
    if($(menu_mb).attr('data-mm-spn-title') == ""){
      $('#menu-mb').addClass('mm--main');
    }
  });

  observer.observe(menu_mb, { 
  attributes: true, 
  attributeFilter: ['data-mm-spn-title'] });

  // Attribute Single Product : Size Type

  $('.size-type-block .size-type').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('.size-type-block .size-type').removeClass('current');
		$('.size-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  // Tab Desciption Single Product

  $('.description-block .desc-type').click(function(){
		let tab_dsec_id = $(this).attr('data-tab');

		$('.description-block .desc-type').removeClass('current');
		$('.desc-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_dsec_id).addClass('current');
	});

  // Product Categories Boots Page - Show/Hide Filter

  $('.filter-btn-block .filter-btn').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').toggleClass('show');
    $('.product-section .-side-right').toggleClass('show');
	});

  // Product Categories Boots Page - Show/Hide Filter Mobile

  $('.filter-btn-block-mb .filter-btn').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').addClass('mb-show');
    $('.product-section .-side-right').addClass('mb-show');
	});

  $('.grid-item.-side-left.show .close-btn-mb').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').removeClass('mb-show');
    $('.product-section .-side-right').removeClass('mb-show');
	});

  $('.product-section .-side-right .overlay-mb').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').removeClass('mb-show');
    $('.product-section .-side-right').removeClass('mb-show');
	});

  // Menu Toggle

  $('.menu-tg .tg__title').click(function(j) {
    let tg = $(this).closest('.tg__card').find('.tg__panel');
  
    if ($(this).hasClass('toggle')) {
      $(this).removeClass('toggle');
    } else {
      $(this).addClass('toggle');
    }
  
    tg.stop(false, true).slideToggle();
    j.preventDefault();
  });

  $('.product-detail-boots-page .btn-360').click(function(j) {
    $('#view-360').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('#view-360 .close-btn').click(function(j) {
    $('#view-360').removeClass('show');

    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-boots-page .personalization-btn').click(function(j) {
    $('.popup-personalize').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('.popup-personalize .close-btn').click(function(j) {
    $('.popup-personalize').removeClass('show');
    
    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-jersey-page .popup-personalize .close-btn').click(function(j) {
    $('.popup-personalize').removeClass('show');
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();

    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-jersey-page .personalization-btn').click(function(j) {
    $('.popup-personalize').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('#next-step-01').click(function(){
    $('#step-01').fadeOut();
    $('#step-02').fadeIn();
  });

  $('.back-btn').click(function(){
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();
  });

  $('input[name="radio-group"]').click(function(){
      if($(this).attr("value")=="screen-soccers"){
        $(".screen-num").fadeOut('slow');
        $(".screen-box").fadeIn('slow');
      } else if ($(this).attr("value")=="screen-num"){
        $(".screen-box").fadeOut('slow');
        $(".screen-num").fadeIn('slow');
      } else{
        $(".screen-box").fadeOut('slow');
        $(".screen-num").fadeOut('slow');
      }
  });

  $('input[name="radio-way"]').click(function(){
      if($(this).attr("value")=="step-number"){
        $("#step-number").fadeIn('slow');
        $("#step-01").fadeOut('slow');
      } else {
        $("#step-logo").fadeIn('slow');
        $("#step-01").fadeOut('slow');
      }
  });

  $('.-submit').click(function(){
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();
  });

  // About Ari - Menu Tab Content

  // a temp value to cache *what* we're about to show
  let target = null;

  // collect all the tabs
  let tabs = $('.tab').on('click', function () {
    target = $(this.hash).removeAttr('id');

    // if the URL isn't going to change, then hashchange
    // event doesn't fire, so we trigger the update manually
    if (location.hash === this.hash) {
      // but this has to happen after the DOM update has
      // completed, so we wrap it in a setTimeout 0
      setTimeout(update, 0);
    }
  });

  // get an array of the panel ids (from the anchor hash)
  let targets = tabs.map(function () {
    return this.hash;
  }).get();

  // use those ids to get a jQuery collection of panels
  let panels = $(targets.join(',')).each(function () {
    // keep a copy of what the original el.id was
    $(this).data('old-id', this.id);
  });

  function update() {
    if (target) {
      target.attr('id', target.data('old-id'));
      target = null;
    }

    let hash = window.location.hash;
    if (targets.indexOf(hash) !== -1) {
      show(hash);
    }
  }

  function show(id) {
    // if no value was given, let's take the first panel
    if (!id) {
      id = targets[0];
    }
    // remove the selected class from the tabs,
    // and add it back to the one the user selected
    tabs.removeClass('current').filter(function () {
      return (this.hash === id);
    }).addClass('current');

    // now hide all the panels, then filter to
    // the one we're interested in, and show it
    panels.hide().filter(id).show();
  }

  $(window).on('hashchange', update);

  // initialise
  if (targets.indexOf(window.location.hash) !== -1) {
    update();
  } else {
    show();
  }

  // Convert Tabs to Select option on Mobile

  if ($(window).width() <= 991) {
    $('.tabs li').click(function() {
      $(this).siblings().addBack().children();
      var a = $(this).siblings().toggle();
      $(this).parent().prepend(this);
    });
  }

  // My Account - Edit Account

  $('.my-account-page .-edit-btn').click(function(){

    $('.my-account-page .-edit-btn').addClass('rsm');
    
    $("#inform").hide();
    $("#edit-inform").show();
  });

  $('.my-account-page .tab').click(function(){
    
    $("#edit-inform").hide();
    $("#edit-pass").hide();
    $(".detail-last-history-block").hide();
    $(".new-address-block").hide();
    $(".edit-address-block").hide();
    $(".-edit-btn").removeClass('rsm');
    
    $(".address-block").show();
    $(".last-history-block").show();
    $("#inform").show();
  });

  $('.my-account-page .back-btn').click(function(){
    $("#edit-inform").hide();
    $("#edit-pass").hide();
    $(".detail-last-history-block").hide();
    $(".new-address-block").hide();
    $(".edit-address-block").hide();
    $(".-edit-btn").removeClass('rsm');
    
    $(".address-block").show();
    $(".last-history-block").show();
    $("#inform").show();
  });

  $('.my-account-page .chg-pass').click(function(){
    
    $("#edit-inform").hide();
    $("#inform").hide();

  $(".-edit-btn").addClass('rsm');
    $("#edit-pass").show();
  });

  $('.my-account-page .more-detail').click(function(){
    
    $(".last-history-block").hide();

    $(".detail-last-history-block").show();
    
  });

  $('.my-account-page #add-address').click(function(e){
    e.preventDefault();
    
    $(".address-block").hide();
    $(".new-address-block").show();
  });

  $('.my-account-page #edit-address-shipping-btn').click(function(e){
    e.preventDefault();
    
    $(".address-block").hide();
    $("#edit-billing-form").hide();

    $(".edit-address-block").show();
    $("#edit-shipping-form").show();
  });

  $('.my-account-page #edit-address-billing-btn').click(function(e){
    e.preventDefault();
    
    $(".address-block").hide();
    $("#edit-shipping-form").hide();
    
    $(".edit-address-block").show();
    $("#edit-billing-form").show();
  });

  $('#add-shipping').click(function(){
      $(".new-address-block #add-shipping-form").show();
      $(".new-address-block #add-billing-form").hide();
  });

  $('#add-billing').click(function(){
      $(".new-address-block #add-shipping-form").hide();
      $(".new-address-block #add-billing-form").show();
  });

  $('#for-personal').click(function(){
      $("#personal").show();
      $("#company").hide();
  });

  $('#for-company').click(function(){
    $("#personal").hide();
    $("#company").show();
  });

  $('#for-personal-edit').click(function(){
      $("#personal-edit").show();
      $("#company-edit").hide();
  });

  $('#for-company-edit').click(function(){
    $("#personal-edit").hide();
    $("#company-edit").show();
  });

  //Check box - Compare 

  $('label.checkbox.compare').click(function(){
    $("#bottom-compare").show();

  });

  $('.clear-btn').click(function(e){
    e.preventDefault();

    $("#bottom-compare").hide();
    $( ".checkbox input" ).prop( "checked", false );
  });

    // Checkout Accordion Payment Method

  $(".accordion_options").click(function() {
    let current = $(this).attr("rel");
    let next = parseInt(current)+1;
    
    $('#c'+current).removeClass('collapse');
    $('#c'+current).prev().addClass('editable');

    $('#c'+next).prev().addClass('collapse');
    $('#c'+next).addClass('collapse');
  });

  $("#step-accordion .edit-btn").click(function(e) {
    e.preventDefault();

    let current = $(this).attr("rel");
    let next = parseInt(current)+1;

    if(current == '1'){
      $('#step-accordion .editable').removeClass('editable');
      $('#step-accordion .collapse').removeClass('collapse');

      $('#c'+current).prev().addClass('collapse');
      $('#c'+current).addClass('collapse');
    } else{
      $(this).parent().removeClass('editable');

      $('#c'+current).addClass('collapse');

      $('#c'+next).prev().removeClass('collapse');
      $('#c'+next).removeClass('collapse');
    }
    
  });

    // Checkout Checked Radio

    $('#new-billing').click(function(){
      $("#step-02 #add-on-address").show();
    });

    // Choose Area

    $('.choose-area #international').click(function(){
      $("#confirm-area").fadeIn();
      $("#confirm-area").addClass('inter');
    });

    $('.choose-area #thailand').click(function(){
      $("#confirm-area").fadeIn();
      $("#confirm-area").addClass('local');
    });
    
    $('#confirm-area .close-btn').click(function(){
      $("#confirm-area").fadeOut();

      setTimeout(function() {
        $("#confirm-area").removeClass('local');
        $("#confirm-area").removeClass('inter');
       }, 500);
    });

    $('#confirm-area .overlay').click(function(){
      $("#confirm-area").fadeOut();

      setTimeout(function() {
        $("#confirm-area").removeClass('local');
        $("#confirm-area").removeClass('inter');
       }, 500);
      
    });

    $('#confirm-area #inter-btn').click(function(){
      $("#confirm-area").fadeOut();

      setTimeout(function() {
        $("#confirm-area").removeClass('local');
        $("#confirm-area").removeClass('inter');
       }, 500);

      $(".payment-method.-local").hide();
      $(".payment-method.-inter").show();
    });

    $('#confirm-area #local-btn').click(function(){
      $("#confirm-area").fadeOut();

      setTimeout(function() {
        $("#confirm-area").removeClass('local');
        $("#confirm-area").removeClass('inter');
       }, 500);

      $(".payment-method.-local").show();
      $(".payment-method.-inter").hide();
    });

    $('#confirm-area #cancel-btn').click(function(){
      $("#confirm-area").fadeOut();

      setTimeout(function() {
        $("#confirm-area").removeClass('local');
        $("#confirm-area").removeClass('inter');
       }, 500);
    });

    // End Choose Area

    $('#inter-new-billing').click(function(){
      $(".-inter #add-on-inter-address").show();
    });

    $('#inter-old-billing').click(function(){
      $(".-inter #add-on-inter-address").hide();
    });

    $(".-inter .accordion_options").click(function() {
      
      let current = $(this).attr("rel");
      let next = parseInt(current)+1;
      
      $('.-inter #c'+current).removeClass('collapse');
      $('.-inter #c'+current).prev().addClass('editable');
  
      $('.-inter #c'+next).prev().addClass('collapse');
      $('.-inter #c'+next).addClass('collapse');
    });

    $(".-inter .edit-btn").click(function(e) {
      e.preventDefault();
  
      let current = $(this).attr("rel");
      let next = parseInt(current)+1;
  
      if(current == '1'){
        $('.-inter .editable').removeClass('editable');
        $('.-inter .collapse').removeClass('collapse');
  
        $('.-inter #c'+current).prev().addClass('collapse');
        $('.-inter #c'+current).addClass('collapse');
      } else{
        $(this).parent().removeClass('editable');
  
        $('.-inter #c'+current).addClass('collapse');
  
        $('.-inter #c'+next).prev().removeClass('collapse');
        $('.-inter #c'+next).removeClass('collapse');
      }
      
    });

    $('.-inter #promptpay-inter').click(function(){
      $(".-inter #credit-submit").hide();

      $(".-inter #pp-submit").show();
    });

    $('.-inter #credit-card-inter').click(function(){
      $(".-inter #credit-submit").show();

      $(".-inter #pp-submit").hide();
    });
    
    
    // Self Choose Billing

    $('#new-self-billing').click(function(){
      $("#step-01 #add-on-self-address").show();
    });

    $('#step-01 .edit-btn.-shipping').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #edit-shipping-form").show();
    });

    $('#step-01 .edit-btn.-billing').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #edit-billing-form").show();
    });

    $('#step-01 .add-send-inform-btn.-shipping').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #add-shipping-form").show();
    });

    $('#step-01 .add-send-inform-btn.-billing').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #add-billing-form").show();
    });

    // Self End

    $('#old-billing').click(function(){
      $("#step-02 #add-on-address").hide();
    });

    $('.-local #promptpay').click(function(){
      $(".-local #credit-submit").hide();

      $(".-local #pp-submit").show();
    });

    $('.-local #credit-card').click(function(){
      $(".-local #credit-submit").show();

      $(".-local #pp-submit").hide();
    });

    $('#popup-address .close-btn').click(function(){
      $("#popup-address").fadeOut();
      $("#popup-address form").hide();
    });

    $('#popup-address .overlay').click(function(){
      $("#popup-address").fadeOut();
      $("#popup-address form").hide();
    });

    $('#step-02 .edit-btn.-shipping').click(function(){
      $("#popup-address").fadeIn();

      $("#edit-shipping-form").show();
    });

    $('#step-02 .edit-btn.-billing').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #edit-billing-form").show();
    });

    $('#step-02 .add-send-inform-btn.-shipping').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #add-shipping-form").show();
    });

    $('#step-02 .add-send-inform-btn.-billing').click(function(){
      $("#popup-address").fadeIn();

      $("#popup-address #add-billing-form").show();
    });

    $('#step-01 #cash-on-deli').click(function(){
      $("#step-02").show();
      $(".-payment-method").hide();
      $(".accordion_options_swap").hide();
      $("#step-03").removeClass('swap-step');

      $(".self-block").hide();

      $(".-payment-sameday").show();
      $("#step-01 .accordion_options").show();
    });

    $('#step-01 #sameday').click(function(){
      $("#step-02").show();
      $(".-payment-sameday").hide();
      $(".accordion_options_swap").hide();
      $("#step-03").removeClass('swap-step');

      $(".self-block").hide();

      $(".-payment-method").show();
      $("#step-01 .accordion_options").show();
    });

    $('#step-01 #normal').click(function(){
      $("#step-02").show();
      $(".-payment-sameday").hide();
      $(".accordion_options_swap").hide();
      $("#step-03").removeClass('swap-step');

      $(".self-block").hide();

      $(".-payment-method").show();
      $("#step-01 .accordion_options").show();
    });

    $('#step-01 #self').click(function(){
      $("#step-02").hide();
      $(".-payment-sameday").hide();
      $("#step-01 .accordion_options").hide();
      
      $(".self-block").show();

      $(".-payment-method").show();
      $(".accordion_options_swap").show();
      $("#step-03").addClass('swap-step');
    });

    $(".accordion_options_swap").click(function() {
      let current = $(this).attr("rel");
      let next = parseInt(current)+1;
      
      $('#c1').removeClass('collapse');
      $('#c1').prev().addClass('editable');
  
      $('#c'+next).prev().addClass('collapse');
      $('#c'+next).addClass('collapse');
    });    

    $(".addon-col.-acc").mouseenter(function() {
      $(this).find("#dd-unlogin").show();
    });
    $(".addon-col.-acc #dd-unlogin").mouseleave(function() {
      $(this).hide();
    });
});