$(function() {
    $('.main-menu').on({
        "mouseenter" : function() {
            $(".title-loginmenu-mainmenu").addClass("header-hover");
            $('.lnb').fadeIn(500, "linear");
        },
        "mouseleave" : function() {
            $(".title-loginmenu-mainmenu").removeClass("header-hover");
            $('.lnb').fadeOut(0, "linear");
        }
    })



    const bannerDot = $('.img-nav > span');

    bannerDot.on("click", function() {
        let index = bannerDot.index(this);
        bannerDot.removeClass("on");
        $(this).addClass("on")

        $('header').fadeOut(300, "linear", function() {
            $('header').css({"background-image" : `url('./images/main-img(${index}).png')` })
            $('header').fadeIn(300, "linear")
        })
    })



    $('#minus').on("click", function() { guestUpDown(-1) });
    $('#plus').on("click", function() { guestUpDown(1) });

    $('#guestNum').on("change", function() { 
        let num = Number($('#guestNum').val());
        limit(num);
    });

    function guestUpDown(upDown) {
        let num = Number($('#guestNum').val());
        num += upDown;
        guesLimit(num);
    }

    function guesLimit(num) {
        if(num < 0 ) { num = 0; }
        if(num > 20 ) { num = 20; }
        $('#guestNum').val(num);
    }
    



    const scrollbarWidth = $('.scroll-line').width() - $('.scroll-bt').width()
    console.log(scrollbarWidth);
    
    let posInBt;

    $('.scroll-bt').on({
        "dragstart" : function(e) {
            posInBt = e.pageX - $('.scroll-bt').offset().left
            $('.scrollbar').on("dragover", function(e) { scrollBtMove(e) })
        },
    })

    let buttonLeft;
    let listPos;

    function scrollBtMove(e) {
        e = e.originalEvent;
        buttonLeft = e.pageX - $('.scrollbar').offset().left - posInBt;
        
        if (buttonLeft <= 0 ) { buttonLeft = 0; }
        if (buttonLeft >= scrollbarWidth) { buttonLeft = scrollbarWidth; }

        listPos = buttonLeft / scrollbarWidth * 100;
        $('.room-list').css({"transform" : `translateX(-${listPos}%)`})

        $('.scroll-bt').css({ "left" : buttonLeft + "px" });
    }



    $('.lt-bt').on("click", function() { galleryChange(-1) })
    $('.gt-bt').on("click", function() { galleryChange(1) })
    
    const galleryImg = $('.gallery-img');
    const galleryBar = $('.gallery-bar span');
    const galleryTxt = $('.gallery-txt li');
    let num = 0;

    function galleryChange(plusMinus) {
        num += plusMinus;
        num = galleryLimit(num);

        galleryImg.attr("src", `./images/gallery${ num + 1}.png`)
        galleryImg.attr("alt", `절물자연휴양림 풍경${ num + 1}`)
        galleryBar.removeClass("on");
        galleryBar.eq(num).addClass("on");
        galleryTxt.removeClass("on");
        galleryTxt.eq(num).addClass("on");
    }
    
    function galleryLimit(num) {
        if(num < 0 ) { num = galleryBar.length - 1; }
        if(num >= galleryBar.length ) { num = 0; }
        
        return num;
    }



    let windowHeight = $(window).height();
    let programTop = $('.program h3')
    let program = $('.program-conbox')
    let pos;

    $(window).on("scroll", function() {
        pos = $(this).scrollTop();
        for(let i = 0; i < programTop.length; i++) {
            programShowPos = programTop.eq(i).offset().top - windowHeight * 0.4

            if(pos > programShowPos) {
                program.eq(i).addClass("on");
            }
        }
    })
}); 