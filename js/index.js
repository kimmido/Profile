window.onload = function() {
    const menuBt = document.querySelector(".mobile-menu-bt > .bt-box")

    menuBt.addEventListener("click", menuToggle);

    // 모바일 메뉴 열고 닫기
    function menuToggle() {
        let Mgnb = this.parentNode.nextSibling.nextSibling;
        
        this.classList.toggle('on');
        Mgnb.classList.toggle('on');
    } 


    
    const home = document.getElementById("homeWrap");
    // const mainCursor = document.getElementById("cursor");
    const homeCursor = document.querySelector(".mouse-pointer");
    const hiddenCon = homeCursor.querySelector(".background-neon");

    // document.addEventListener("mousemove", mainCursorOn);
    home.addEventListener("mousemove", homeCursorOn);
    home.addEventListener("mouseout", homeCursorOff);
    
    // 색상 반전 마우스 포인터 생성
    function homeCursorOn(e) {
        // e.stopPropagation();
        // mainCursorOff();
        let hiddenConLeft = e.pageX - 120;
        let hiddenConTop = e.pageY - 120;

        homeCursor.classList.add('scale');
        homeCursor.style.left = hiddenConLeft + "px";
        homeCursor.style.top = hiddenConTop + "px";
        hiddenCon.style.left = -hiddenConLeft + "px";
        hiddenCon.style.top = -hiddenConTop + "px";
    }

    // 색상반전 마우스 포인터 삭제
    function homeCursorOff() {
        homeCursor.classList.remove('scale');
    }

    // function mainCursorOff() {
    //     mainCursor.classList.remove('on');
    // }

    // function mainCursorOn(e) {
    //     mainCursor.classList.add('on');
        
    //     mainCursor.style.left = e.pageX - 6 + "px";
    //     mainCursor.style.top = e.pageY - 6 + "px";
    // }
    

    
    window.addEventListener("scroll", backColorChange);
    
    // 스크롤 위치에 따른 배경색 변경
    function backColorChange() {
        let pos = document.documentElement.scrollTop;

        if(pos > 0) {
            home.style.opacity = 0;
        } else {
            home.style.opacity = 1;
        }
    }


    
    const logo = document.querySelector(".logo > a");
    
    // 로고 클릭시 맨 위로 이동
    logo.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });



    const gnbA = document.querySelectorAll(".gnb li a")
    
    let target;
    let targetTop = [];
    
    // gnb 클릭시 부드러운 이동
    for(let a of gnbA) {
        a.addEventListener("click", e => {
            e.preventDefault();
            target = a.getAttribute('href');
            targetTop = document.querySelector(target).offsetTop;
            console.log(target);
            
            window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
        });
        window.scroll(console.log(targetTop));
        console.log(targetTop);
    }
    
    // for(let i = 0; i < gnbA.length; i++) {
    // }

    // console.log(targetTop);

}

$(function() {
    // const idx = $("attitudeWrap .index");
    // const txt = $("attitudeWrap .attitude-txt").children("li");
    
    // console.log(idx);
    // console.log(txt);

});