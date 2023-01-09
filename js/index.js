window.onload = function() {
    const menuBt = document.querySelector(".mobile-menu-bt > .bt-box")

    menuBt.addEventListener("click", menuToggle);

    // 모바일 메뉴 열고 닫기
    function menuToggle() {
        let Mgnb = this.parentNode.nextSibling.nextSibling;
        
        this.classList.toggle('on');
        Mgnb.classList.toggle('on');
    } 


    // ********** 마우스 포인터 이벤트 **********
    const home = document.getElementById("homeWrap");
    const mainCursor = document.getElementById("cursor");
    const homeCursor = document.querySelector(".mouse-pointer");
    const hiddenCon = homeCursor.querySelector(".background-neon");
    // const clickInner = document.getElementsByClassName("a");
    // console.log(clickInner);
    // console.log(clickInner[0].children);

    // document.addEventListener("mousemove", mouseEvent);
    document.addEventListener("mouseout", mainCursorOff);
    document.addEventListener("mousemove", mainCursorOn);
    home.addEventListener("mousemove", homeCursorOn);
    home.addEventListener("mouseout", homeCursorOff);
    
    function mainCursorOn(e) {
        mainCursor.classList.add('on');
        
        mainCursor.style.left = e.pageX - 6 + "px";
        mainCursor.style.top = e.pageY - 6 + "px";
        
        if(e.target.matches(".click")) { 
            mainCursor.classList.add('pointer'); 
        } else {
            mainCursor.classList.remove('pointer'); 
        }
    }
    
    function mainCursorOff() {
        mainCursor.classList.remove('on');
    }
    
    // 색상 반전 마우스 포인터 생성
    let hiddenConLeft;
    let hiddenConTop;

    function homeCursorOn(e) {
        if(pos < 1) { e.stopPropagation(); }

        hiddenConLeft = e.pageX - 120;
        hiddenConTop = e.pageY - 120;

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
    


    // ********** 헤더 클릭 이벤트 ********** 
    const gnbA = document.querySelectorAll(".gnb li a")
    
    let target;
    let targetTop = [];
    let targetBottom = [];

    gnbA.forEach(a => {
        target = a.getAttribute('href');
        targetTop.push(document.querySelector(target).offsetTop);
        targetBottom.push(document.querySelector(target).offsetTop + document.querySelector(target).offsetHeight); 
    });
    
    // gnb 클릭시 부드러운 이동
    for(let i = 0; i < gnbA.length; i++) {
        gnbA[i].addEventListener("click", function(e) {
            // console.log(e);
            console.log(this); 
            // console.log(target);
            e.preventDefault();
            window.scrollTo({ left: 0, top: targetTop[i] + 1, behavior: "smooth" });
        });
    }
    
    const logo = document.querySelector(".logo > a");
    
    // 로고 클릭시 맨 위로 이동
    logo.onclick = function(e) {
        e.preventDefault();
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    };
    // logo.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     console.log(e.currentTarget);
    //     window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    // });



    // ********** 스크롤 이벤트 ********** 
    window.addEventListener("scroll", scrollEvent);
    
    let pos = document.documentElement.scrollTop;
    let vh_03 = window.innerHeight * 0.3;
    let vh_06 = window.innerHeight * 0.6;

    function scrollEvent() {
        pos = document.documentElement.scrollTop;
        backColorChange();
        currentLocation();
        itemUp();
        mouseEvent2();
        aboutTitleMove();
        attitudeImgCover();
    }

    function mouseEvent2() {
        if(pos > 0) {
            homeCursorOff();
            home.style.cursor = "default";
        } else {
            mainCursorOff();
            home.style.cursor = "none";
        }
    }

    // 스크롤 위치에 따른 배경색 변경
    function backColorChange() {
        pos > 0 ? home.style.opacity = 0 : home.style.opacity = 1
    }

    // 스크롤 위치에 따른 gnb 포인트
    function currentLocation(){
        for(let i = 0; i < gnbA.length; i++) {
            if(pos >= targetTop[i] && pos < targetBottom[i]) {
                gnbA[i].previousSibling.previousSibling.classList.add('dot');
            } else {
                gnbA[i].previousSibling.previousSibling.classList.remove('dot');
            }
        }
    } 

    // 스크롤 위치에 따른 about 강조글씨 등장
    const aboutTitle = document.querySelector(".about-title");
    let titleIN = document.querySelector("#aboutWrap").offsetTop - vh_06;

    function aboutTitleMove() {
        if(pos > titleIN) {            
            [...aboutTitle.children].forEach(t => {
                t.classList.add("center-in");
            });
        } else {
            [...aboutTitle.children].forEach(t => {
                t.classList.remove("center-in");
            });
        }
    }

    // 스크롤 위치에 따른 attitude 커버 이벤트
    function attitudeImgCover() {
        pos > $attd.offsetTop ? 
        $attdImg.classList.add("coverOut") : $attdImg.classList.remove("coverOut")
    }
    
    // 포트폴리오 등장 이벤트
    const itemWrap = document.querySelectorAll(".portfolio-list .item-wrap");
    let item;
    let upPos;
    function itemUp() {
        itemWrap.forEach(wrap => {
            item = wrap.querySelector(".item-inner");
            upPos = pos + vh_03;
            
            if(upPos > wrap.offsetTop) {
                item.classList.add("up");
            };
        });
    }
    

    
    
    
    // **** attitude섹션 인덱스와 버튼 클릭 시 내용 변경 ****
    const $attd = document.getElementById("attitudeWrap");
    const $attdImg = document.getElementById("img");
    const indexArea = $attd.querySelector(".index");
    const $attdTitle = $attd.querySelectorAll(".title > li");
    const $attdTexT = $attd.querySelectorAll(".attitude-txt > li");
    const $attdPrev = $attd.querySelector(".prev");
    const $attdNext = $attd.querySelector(".next");
    let $attdCounter = 0;
    
    // 클릭 이벤트
    $attdPrev.onclick = function(e) {
        e.preventDefault();
        $attdCounter--;
        if($attdCounter < 0) { $attdCounter = 2; }
        attdConChange();
    }
    
    $attdNext.onclick = function(e) {
        e.preventDefault();
        $attdCounter++;
        if($attdCounter > 2) { $attdCounter = 0; }
        attdConChange();
    }

    indexArea.addEventListener("click", paging);

    function paging(e) {
        if(e.target.matches('span')) {
            $attdCounter = [...indexArea.children].indexOf(e.target);
            attdConChange();
        }
    }

    // 내용 변경 함수
    function attdConChange() {
        console.log($attdCounter);

        [...indexArea.children].forEach(idx => {
            idx == [...indexArea.children][$attdCounter] ?
            idx.classList.add("on") :
            idx.classList.remove("on") 
        });
        
        $attdTexT.forEach(txt => {
            txt == $attdTexT[$attdCounter] ?
            txt.classList.add("on") :
            txt.classList.remove("on")
        });

        $attdTitle.forEach(title => {
            title == $attdTitle[$attdCounter] ?
            title.classList.add("on") :
            title.classList.remove("on")
        });

        $attdImg.classList.toggle("coverOut");
        setTimeout(() => {
            $attdImg.style.backgroundImage = `url('./images/attitude(${$attdCounter}).png')`;
            $attdImg.classList.toggle("coverOut")
        }, 500)
    }


    const skillList = document.getElementById("skillList");
    const skillDetail = document.getElementById("skillDetail");
    const cubeInner = ["front", "back", "top", "bottom", "left", "right"]
    const skill = ["Java script", "SASS", "HTML", "React", "JQuery", "CSS", "Ps", "Ai"]

    let cube = "";
    // let cubeList = [];
    
    skill.forEach(sk => {
        cube += '<div class="perspective">';
        cube += '<div class="cube click">';
        cubeInner.forEach(inner => {
            inner == "front" || inner == "back" ?
            cube += `<div class=${inner}><span>${sk}</span></div>` :
            cube += `<div class=${inner}></div>`
        });
        cube += '</div>';
        cube += '</div>';
    });
    // cubeList.push(cube);
    // cube = "";

    // 클릭한 큐브의 써있는 스킬을 변수로 받아서 디테일에 모달로 출력 + 스킬변수로 몇 번째 인덱스인지 받아서 같은 순서에 있는 상세 설명 출력

    skillList.innerHTML = `${cube}`;

    skillList.onclick = function(e) {
        // console.log(e.target);
        if(e.target.matches(".cube")) {
            let title = e.target.querySelector(".front > span").innerText; 
            skillDetail.querySelector(".front > span").innerText = title;
            skillDetail.querySelector(".back > span").innerText = title;
        }
    }
}

$(function() {
    // const idx = $("attitudeWrap .index");
    // const txt = $("attitudeWrap .attitude-txt").children("li");
    
    // console.log(idx);
    // console.log(txt);

});