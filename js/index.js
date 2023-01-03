window.onload = function() {
    const menuBt = document.querySelector(".mobile-menu-bt > .bt-box")

    menuBt.addEventListener("click", menuToggle);

    // 모바일 메뉴 열고 닫기
    function menuToggle() {
        
        let list = this.parentNode.nextSibling.nextSibling;
        
        this.classList.toggle('on');
        list.classList.toggle('on');
        
        console.log(list);
    } 

    // gnb 이동
    // const gnbItem = document.querySelectorAll(".gnb > li");
    // const home = document.getElementById("homeWrap");
    // const about = document.getElementById("aboutWrap");
    // const attitude = document.getElementById("attitudeWrap");
    // const skill = document.getElementById("skillWrap");
    // const portfolio = document.getElementById("portfolioWrap");
    // console.log(gnbItem);
    
    // for(let i = 0; i < gnbItem.length; i++) {
    //     gnbItem[i].querySelector("a").addEventListener("click", dotToggle);
    // }

    // function dotToggle() {
    //     this.previousSibling.previousSibling.classList.add('dot');
    // }
    const home = document.getElementById("homeWrap");
    const mouse = document.querySelector(".mouse-pointer");
    const hiddenCon = mouse.querySelector(".background-neon");
    console.log(getComputedStyle(mouse).width);

    home.addEventListener("mousemove", mousePointer);
    
    // 마우스 포인터 위치 조정
    function mousePointer(e) {
        let hiddenConLeft = e.pageX - 120;
        let hiddenConTop = e.pageY - 120;

        mouse.style.left = hiddenConLeft + "px";
        mouse.style.top = hiddenConTop + "px";
        hiddenCon.style.left = -hiddenConLeft + "px";
        hiddenCon.style.top = -hiddenConTop + "px";
    }
    


    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", cursorPointer);

    function cursorPointer(e) {
        // console.log(getComputedStyle(cursor).width);
        console.log(e.pageX);
        cursor.style.left = e.pageX;
        cursor.style.top = e.pageY;
    }
    
    window.addEventListener("scroll", colorChange);

    
    function colorChange() {
        let pos = document.documentElement.scrollTop;
        console.log(pos);

        if(pos > 0) {
            home.style.opacity = 0;
            cursor.style.zIndex = 95;
        } else {
            home.style.opacity = 1;
            cursor.style.zIndex = 0;
        }
    }
}

// $(function() {
//     $(".logo a").on("click", e => {
//         e.preventDefault();
//         $('html').animate({scrollTop : 0 }, 300);
//     });
//     const gnbBt = $(".gnb a");
//     gnbBt.on("mouseover", e => {
//         e.prev().addClass("dot");
//         // gnbBt.prev().removeClass("dot");
//     })
// })