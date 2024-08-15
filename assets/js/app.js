
$(function () {

    //   Nav toggle =============================

    let navToggle = $("#navToggle");
    let nav = $("#nav");
    navToggle.on("click", function(event) {
        event.preventDefault();

        $('body').toggleClass('show-nav')
        $(this).toggleClass('active');
        nav.toggleClass('show');

    });

     $(window).on("resize", function() {
        navToggle.removeClass('active');
        nav.removeClass('show');
        $('body').removeClass('show-nav')

    });

    
    



    let intro = $("#intro");
    let header = $("#header");

    let headerH = header.innerHeight();
    let introH = intro.innerHeight();

    let scrollTop = $(window).scrollTop();
    
   

    // Header class on scroll ==========================
    

    headerScroll();
    ScrollSpy(scrollTop);
    
    $(window).on("scroll resize", function() {
        headerScroll();
    });

    function headerScroll() {
        headerH = header.innerHeight();
        introH = intro.innerHeight();

        scrollTop = $(this).scrollTop();
        
        if( scrollTop >= (introH - headerH)) {
            header.addClass("header--dark")
        } else {
            header.removeClass("header--dark")
        };
    };


    // Smooth scroll on section===========================

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;
       
        navToggle.removeClass('active');
        nav.removeClass('show');
        $('body').removeClass('show-nav')
        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500);
    });



    // ScrollSpy=======================
        

    ScrollSpy(scrollTop);

    $(window).on("scroll", function() { 
        
        scrollTop = $(this).scrollTop();
        ScrollSpy(scrollTop);
        
    });
    

    function ScrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let windowH = $(window).height();
            let $this = $(this);
            let sectionId = $this.data("scrollspy");
            let sectionOffset = $this.offset().top;
            
            sectionOffset = sectionOffset - (windowH * 0.3); 

            if(scrollTop >= sectionOffset ) {
                $('#nav [data-scroll]').removeClass("active");
                $('#nav [data-scroll="' + sectionId  + '"]').addClass("active");
            }

            if(scrollTop==0) {
                $('#nav [data-scroll]').removeClass("active");
            };   
        });
    };


    // Modal ==============================


    $('[data-modal]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');
        
        $('body').addClass('no-scroll');
        $(modal).addClass('modal_show');

        

    setTimeout(function() {
        $(modal).find('.modal__inner').css({
            transform: 'scale(1)',
            opacity: '1'
    });
    },200);
        
    });

    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        ModalClose(modal);
        
    });
    

    $('.modal').on('click', function() {
        let modal = $(this);
        ModalClose(modal);
    });



    $('.modal__inner').on("click", function(event) {
        event.stopPropagation();
    });



    function ModalClose(modal) {

        modal.find('.modal__inner').css({
            transform: 'scale(0.5)',
            opacity: '0'
    });
        setTimeout(function() {
            $('body').removeClass('no-scroll')
            modal.removeClass('modal_show');
            },200);
    }



    //  introSlider =======================

    //   https://kenwheeler.github.io/slick/

    let introSlider = $('#introSlider');

        introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2000
      });


      $('#introBtnPrev').on('click', function() {
        introSlider.slick('slickPrev')
      });

      $('#introBtnNext').on('click', function() {
        introSlider.slick('slickNext')
      });


      // reviewsSlider =======================


      let reviewsSlider = $('#reviewsSlider');

      reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
      });


    //   AOS INIT https://github.com/michalsnik/aos
    
    AOS.init({
    // Global settings:
    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });




});
