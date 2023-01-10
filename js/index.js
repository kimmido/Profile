window.onload = function() {

    // 모바일 메뉴 열고 닫기
    const menuBt = document.querySelector(".mobile-menu-bt > .bt-box")

    menuBt.addEventListener("click", menuToggle);

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
    const gnbA = document.querySelectorAll(".gnb li a");
    
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

    // attitude 이미지 커버 여닫기
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
    const $attdIndex = $attd.querySelector(".index");
    const $attdTitle = $attd.querySelectorAll(".title > li");
    const $attdTexT = $attd.querySelectorAll(".attitude-txt > li");
    const $attdPrev = $attd.querySelector(".prev");
    const $attdNext = $attd.querySelector(".next");
    let $attdCounter = 0;
    
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

    $attdIndex.addEventListener("click", paging);

    function paging(e) {
        if(e.target.matches('span')) {
            $attdCounter = [...$attdIndex.children].indexOf(e.target);
            attdConChange();
        }
    }

    // 내용 변경 함수
    function attdConChange() {
        console.log($attdCounter);

        [...$attdIndex.children].forEach(idx => {
            idx == [...$attdIndex.children][$attdCounter] ?
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


    
    // ***** skill섹션 모달 기능 *****
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