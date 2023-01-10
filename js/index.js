window.onload = function() {

    // **** attitude섹션 내용 생성 및 변경 ****
    const $attd = document.getElementById("attitudeWrap");
    const $attdImg = document.getElementById("img");
    const $attdIndex = $attd.querySelector(".index");
    const $attdTitle = $attd.querySelector(".title > h4");
    const $attdText = $attd.querySelector(".attitude-txt > p");
    const $attdPrev = $attd.querySelector(".prev");
    const $attdNext = $attd.querySelector(".next");

    const attitude = [
        {
            title : "RECORD",
            txt : "기록은 습관입니다. 스티커 메모를 활용해 빠르게 기록하고 노션을 이용해 일정을 계획하고 정리합니다. 기록은 시간을 절약하고 더 가치있게 사용할 수 있도록 해줍니다."
        },
        {
            title : "CURIOSITY",
            txt : "내용 2내 용2내  용 2내용2 내용2내 용 2내용2내용2내 용2내용2내용 2 내 용2내용2 내용2내용 2내 용2내용2 내용 2내용 2내 용2내용 2내용2내 용2 내 용2내용2내 용2 내용 2내용2내용 2내용2 내용 2내용2"
        },
        {
            title : "RECORD",
            txt : "내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3"
        }
    ]

    // 인덱스 생성
    for(let i = 0; i < attitude.length; i++) {
        span = document.createElement("span");
        span.className = "click";
        $attdIndex.appendChild(span);
    }

    let $attdCounter = 0;
    attdConChange();

    // 내용 입력 함수
    function attdConChange() {
        console.log($attdCounter);

        [...$attdIndex.children].forEach(idx => {
            idx == [...$attdIndex.children][$attdCounter] ?
            idx.classList.add("on") :
            idx.classList.remove("on") 
        });
        
        $attdTitle.innerText = `${attitude[$attdCounter].title}`
        // $attdTitle.classList.toggle("up");
        // setTimeout(() => {
        //     $attdTitle.classList.toggle("up");
        // }, 600)
        
        $attdText.classList.toggle("up");
        setTimeout(() => {
            $attdText.innerText = `${attitude[$attdCounter].txt}`
            $attdText.classList.toggle("up");
        }, 600)
        
        $attdImg.classList.toggle("coverOut");
        setTimeout(() => {
            $attdImg.style.backgroundImage = `url('./images/attitude(${$attdCounter}).png')`;
            $attdImg.classList.toggle("coverOut")
        }, 500)
    }

    // 이전, 다음, 인덱스 버튼 클릭 이벤트
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

    $attdIndex.onclick = function(e) {
        if(e.target.matches('span')) {
            $attdCounter = [...$attdIndex.children].indexOf(e.target);
            attdConChange();
        }
    }



    // ***** skill섹션 내용요소 생성 *****
    const body = document.querySelector("body");
    const skillList = document.getElementById("skillList");
    
    const cubeInner = ["front", "back", "top", "bottom", "left", "right"]
    const skill = { 
        sk : ["Java script", "SASS", "HTML", "React", "JQuery", "CSS", "Ps", "Ai"],
        desc : [
            "", 
            "", 
            "표준에 맞추어 html을 구성하고 접근성을 고려하여 작성할 수 있습니다. 시멘틱 태그를 적절히 사용하며, 태그의 용도를 알기 쉽게 클래스 이름을 부여합니다.", 
            "", 
            "", 
            "", 
            "", 
            ""
        ]
    }

    // skill큐브 리스트 생성
    let cube = "";

    skill.sk.forEach(sk => {
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
    skillList.innerHTML = `${cube}`;



    // ********** 헤더 클릭 이벤트 ********** 
    const gnbA = document.querySelectorAll(".gnb li a");
    
    let target;
    let targetTop = [];
    let targetBottom = [];
 
    gnbA.forEach(a => {
        target = a.getAttribute('href');
        targetTop.push(document.querySelector(target).offsetTop);
        targetBottom.push(document.querySelector(target).offsetTop + document.querySelector(target).offsetHeight - 1); 
        console.log(target, document.querySelector(target).offsetTop, document.querySelector(target).offsetTop + document.querySelector(target).offsetHeight - 1);
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
     
    // 로고 클릭시 맨 위로 이동
    const logo = document.querySelector(".logo > a");
     
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



    // ***** 모바일 메뉴 열고 닫기 *****
    const mMenuBt = document.querySelector(".mobile-menu-bt > .bt-box")
    const mGnb = document.getElementById("mobileGnb");

    mMenuBt.onclick = function() { menuToggle(); }
    mGnb.onclick = function() { menuToggle(); };

    function menuToggle() {
        mMenuBt.classList.toggle('on');
        mGnb.classList.toggle('on');
    } 



    // ********** 마우스 포인터 효과 **********
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

    // home섹션 지나면 마우스 포인트 변경
    function mouseEvent2() {
        if(pos > 0) {
            homeCursorOff();
            home.style.cursor = "default";
        } else {
            mainCursorOff();
            home.style.cursor = "none";
        }
    }

    // home섹션 지나면 배경색 변경
    function backColorChange() {
        pos > 0 ? home.style.opacity = 0 : home.style.opacity = 1
    }

    // 섹션 위치에 해당하는 gnb 강조 효과
    function currentLocation(){
        for(let i = 0; i < gnbA.length; i++) {
            if(pos >= targetTop[i] && pos < targetBottom[i]) {
                gnbA[i].previousSibling.previousSibling.classList.add('dot');
            } else {
                gnbA[i].previousSibling.previousSibling.classList.remove('dot');
            }
        }
    } 

    // about섹션 강조글씨 등장
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

    // attitude섹션 이미지 커버 여닫기
    function attitudeImgCover() {
        if(pos > $attd.offsetTop) {
            $attdTitle.classList.add("up");
            $attdText.classList.add("up");
            $attdImg.classList.add("coverOut");
        } else {
            $attdTitle.classList.remove("up");
            $attdText.classList.remove("up");
            $attdImg.classList.remove("coverOut");
        }
    }
    
    // portfolio섹션 등장 이벤트
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
    
    
    
    

    
    // ***** skill섹션 모달 기능 *****
    // skill설명 모달창 열기
    const skillDetail = document.getElementById("skillDetail");
    const detailClose = skillDetail.querySelector(".close");
    skillList.onclick = function(e) {
        
        if(e.target.matches(".cube")) {
            let sk = e.target.querySelector(".front > span").innerText;
            let idx = skill.sk.indexOf(sk);

            skillDetail.querySelector(".front > span").innerText = sk;
            skillDetail.querySelector(".back > span").innerText = sk;
            skillDetail.querySelector(".txt-inner > p").innerText = skill.desc[idx];
            skillDetail.classList.add("on");
            toggleScroll();
        }
    }
    
    // skill설명 모달창 닫기
    detailClose.onclick = function(e) {
        skillDetail.classList.remove("on");
        toggleScroll();
    }

    let toggle = false;
    let modalPos;
    function toggleScroll() {
        toggle = !toggle;
        if(toggle) {
            modalPos = document.documentElement.scrollTop;
            body.style.overflowY = "overlay";
            body.style.height = "100%";
            body.style.position = 'fixed';
            body.style.top = `-${modalPos}px`;
        } else {
            body.style.removeProperty("overflow");
            body.style.removeProperty("height");
            body.style.removeProperty("top");
            body.style.removeProperty("position");
            window.scrollTo(0, modalPos);
        }
    }



    // ****** portfolio섹션 인덱스 클릭시 부드러운 이동 ******
    const pofol = document.getElementById("portfolioWrap");
    const pofolIndex = pofol.querySelectorAll(".index");
    const pofolItem = pofol.getElementsByClassName("item-wrap");
    
    pofolIndex.forEach(idx => {
        idx.onclick = function(e) {
            if(e.target.matches('span')) {
                let pofolCounter = [...idx.children].indexOf(e.target);
                let itemTop = pofolItem[pofolCounter].offsetTop;
                window.scrollTo({ left: 0, top: itemTop, behavior: "smooth" });
                // attdConChange();
            }
        }
    });
    
    const emailImg = document.querySelector(".email-wrap > img");

    emailImg.addEventListener("mouseover", function() {
        this.setAttribute("src", "./images/email_open.svg");
    })

    emailImg.addEventListener("mouseout", function() {
        this.setAttribute("src", "./images/email.svg");
    })


    
    // 내용 변경 함수
        // [...indexArea.children].forEach(idx => {
        //     idx == [...indexArea.children][$attdCounter] ?
        //     idx.classList.add("on") :
        //     idx.classList.remove("on") 
        // });
}

$(function() {
    // const idx = $("attitudeWrap .index");
    // const txt = $("attitudeWrap .attitude-txt").children("li");
    
    // console.log(idx);
    // console.log(txt);

});