// **** attitude섹션 내용 생성 및 변경 ****
// const attitude = document.getElementById("attitudeWrap");
// const attitudeImg = attitude.querySelector(".img");
// const attitudeIndex = attitude.querySelector(".index");
// const attitudeTitle = attitude.querySelector(".title h4");
// const attitudeText = attitude.querySelector(".attitude-txt p");
// const attitudeLink = attitude.querySelector(".attitud-link");
// const attitudePrev = attitude.querySelector(".prev");
// const attitudeNext = attitude.querySelector(".next");


// let attitudeCounter = 0;
// attdConChange(attitudeCounter);

// 이전, 다음, 인덱스 버튼 클릭 이벤트
// attitudePrev.onclick = function() {
//     attitudeCounter--;
//     if(attitudeCounter < 0) { attitudeCounter = 2; }
//     attdConChange(attitudeCounter);
// }

// attitudeNext.onclick = function() {
//     attitudeCounter++;
//     if(attitudeCounter > 2) { attitudeCounter = 0; }
//     attdConChange(attitudeCounter);
// }

// attitudeIndex.onclick = function(e) {
//     if(e.target.matches('span')) {
//         attitudeCounter = [...attitudeIndex.children].indexOf(e.target);
//         attdConChange(attitudeCounter);
//     }
// }


// 내용 입력 함수
// function attdConChange(attitudeCounter) {
//     console.log(attitudeCounter);

//     addClassOnlyTarget([...attitudeIndex.children], attitudeCounter, "on")
    
//     attitudeTitle.classList.toggle("up");
//     attitudeLink.classList.toggle("up");
//     setTimeout(() => {
//         attitudeTitle.classList.toggle("up");
//         attitudeText.classList.toggle("up");
//     }, 600)
    
//     attitudeImg.classList.toggle("coverOut");
//     setTimeout(() => {
//         attitudeImg.style.backgroundImage = `url('./images/attitude/attitude(${attitudeCounter}).png')`;
//         attitudeImg.classList.toggle("coverOut")
//     }, 500)
// };

// function addClassOnlyTarget(elements, targetIndex, className) {
//     elements.forEach(element => {
//         element == elements[targetIndex] ?
//         element.classList.add(className) :
//         element.classList.remove(className) 
//     });
// }


// ********** 헤더 클릭 이벤트 ********** 
const gnbA = document.querySelectorAll(".gnb li a");

let target;
let targetTop = [];

gnbA.forEach(a => {
    target = a.getAttribute('href');
    targetTop.push(document.querySelector(target).offsetTop);
});
    
// gnb 클릭시 부드러운 이동
for(let i = 0; i < gnbA.length; i++) {
    gnbA[i].addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ left: 0, top: targetTop[i] + 1, behavior: "smooth" });
    });
}
    
// 로고 클릭시 맨 위로 이동
const logo = document.querySelector(".logo > a");
    
logo.onclick = function(e) {
    e.preventDefault();
    console.log(this);
    console.log(e.target);
    console.log(e.currentTarget);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};


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
    let pos = document.documentElement.scrollTop;
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


// ***** footer 이메일 마우스 이벤트 *****
(function contactImgEvent() {
    const contact = document.querySelector("#contact > img");
    
    contact.addEventListener("mouseover", function() {
        this.setAttribute("src", "./images/envelope_open.svg");
    })

    contact.addEventListener("mouseout", function() {
        this.setAttribute("src", "./images/envelope.svg");
    })
    
    contact.addEventListener("mousedown", function() {
        let mail = this.getAttribute("alt");
        mail = mail.replace("메일주소:", "");
        mail = mail.trim();
        navigator.clipboard.writeText(mail)
        .then(() => {
            alert("메일주소가 복사되었습니다. " + mail);
        })
    })
})();


// ****** portfolio섹션 인덱스 클릭시 부드러운 이동 ******
function portfolioIndexMove(portfolio, portfolioItem) {
    const portfolioIndex = portfolio.querySelectorAll(".index");
    let itemNum;
    let itemTop;

    portfolioIndex.forEach(idx => {
        idx.onclick = function(e) {
            if(e.target.matches('span')) {
                itemNum = [...idx.children].indexOf(e.target);
                itemTop = portfolioItem[itemNum].offsetTop;
                window.scrollTo({ left: 0, top: itemTop, behavior: "smooth" });
            }
        }
    });
};

// ********** 스크롤 이벤트 ********** 
renderPortfolio().then(() => {
    const portfolio = document.getElementById("portfolioWrap");
    const portfolioItem = portfolio.querySelectorAll(".item-wrap");
    const home = document.getElementById("homeWrap");

    
    portfolioIndexMove(portfolio, portfolioItem);
    
    window.addEventListener("scroll", () => {
        let pos = document.documentElement.scrollTop;

        homeOffMouseEvent(pos, home);
        gnbLocationPoint(pos);
        // aboutTitleMove(pos);
        // attitudeConCover(pos);
        portfolioTitleShow(pos, portfolio);
        portfolioItemUp(pos, portfolioItem);
    });
})

// home섹션 지나면 마우스 포인트 변경
function homeOffMouseEvent(pos) {
    if(pos > 0) {
        home.style.opacity = 0
        home.style.cursor = "default";
        homeCursorOff();
    } else {
        home.style.opacity = 1
        home.style.cursor = "none";
        mainCursorOff();
    }
}

// 섹션 위치에 해당하는 gnb 강조 효과
targetTop.push(20000);

function gnbLocationPoint(pos) {
    for(let i = 0; i < gnbA.length; i++) {
        if(pos >= targetTop[i] && pos < targetTop[i + 1]) {
            gnbA[i].previousSibling.previousSibling.classList.add('dot');
        } else {
            gnbA[i].previousSibling.previousSibling.classList.remove('dot');
        }
    }
} 

// about섹션 강조글씨 등장
// const aboutTitle = document.querySelector(".about-title");
// let titleIn = document.querySelector("#aboutWrap").offsetTop - (window.innerHeight * 0.6);

// function aboutTitleMove() {
//     if(pos > titleIn) {            
//         [...aboutTitle.children].forEach(title => {
//             title.classList.add("center-in");
//         });
//     } else {
//         [...aboutTitle.children].forEach(title => {
//             title.classList.remove("center-in");
//         });
//     }
// }

// attitude섹션 내용 커버 여닫기
// function attitudeConCover() {
//     if(pos > attitude.offsetTop - (window.innerHeight * 0.2)) {
//         attitudeTitle.classList.add("up");
//         attitudeText.classList.add("up");
//         attitudeLink.classList.add("up");
//         attitudeImg.classList.add("coverOut");
//     } else {
//         attitudeLink.classList.remove("up");
//         attitudeTitle.classList.remove("up");
//         attitudeText.classList.remove("up");
//         attitudeImg.classList.remove("coverOut");
//     }
// }

function portfolioTitleShow(pos, portfolio) {
    if(pos > portfolio.offsetTop - 500) {
        portfolio.getElementsByTagName("h3")[0].style.display = "block";
    } else {
        portfolio.getElementsByTagName("h3")[0].style.display = "none";
    }
}

// portfolio섹션 등장 이벤트    
function portfolioItemUp(pos, portfolioItem) {
    portfolioItem.forEach(item => {
        let itemUpPOS = item.offsetTop - (window.innerHeight * 0.3);
        
        if(pos > itemUpPOS) {
            item.classList.add("up");
        };
    });
}