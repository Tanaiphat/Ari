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
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // Acccordion

  $('.acc__title').click(function(j) {
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
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

		$('.size-type-block .size-type').removeClass('active');
		$('.size-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

  // Tab Desciption Single Product

  $('.description-block .desc-type').click(function(){
		let tab_dsec_id = $(this).attr('data-tab');

		$('.description-block .desc-type').removeClass('active');
		$('.desc-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_dsec_id).addClass('active');
	});

});