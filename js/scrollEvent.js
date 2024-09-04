window.addEventListener("scroll", scrollEvent);

let pos = document.documentElement.scrollTop;
const home = document.getElementById("homeWrap");

function scrollEvent() {
    homeOffMouseEvent();
    gnbLocationPoint();
    aboutTitleMove();
    attitudeConCover();
    portfolioTitleShow();
    portfolioItemUp();
}

// home섹션 지나면 마우스 포인트 변경
function homeOffMouseEvent() {
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

function gnbLocationPoint(){
    for(let i = 0; i < gnbA.length; i++) {
        if(pos >= targetTop[i] && pos < targetTop[i + 1]) {
            gnbA[i].previousSibling.previousSibling.classList.add('dot');
        } else {
            gnbA[i].previousSibling.previousSibling.classList.remove('dot');
        }
    }
} 

// about섹션 강조글씨 등장
const aboutTitle = document.querySelector(".about-title");
let titleIn = document.querySelector("#aboutWrap").offsetTop - (window.innerHeight * 0.6);

function aboutTitleMove() {
    if(pos > titleIn) {            
        [...aboutTitle.children].forEach(title => {
            title.classList.add("center-in");
        });
    } else {
        [...aboutTitle.children].forEach(title => {
            title.classList.remove("center-in");
        });
    }
}

// attitude섹션 내용 커버 여닫기
function attitudeConCover() {
    if(pos > attitude.offsetTop - (window.innerHeight * 0.2)) {
        attitudeTitle.classList.add("up");
        attitudeText.classList.add("up");
        attitudeLink.classList.add("up");
        attitudeImg.classList.add("coverOut");
    } else {
        attitudeLink.classList.remove("up");
        attitudeTitle.classList.remove("up");
        attitudeText.classList.remove("up");
        attitudeImg.classList.remove("coverOut");
    }
}

function portfolioTitleShow() {
    if(pos > portfolio.offsetTop - 500) {
        portfolio.getElementsByTagName("h3")[0].style.display = "block";
    } else {
        portfolio.getElementsByTagName("h3")[0].style.display = "none";
    }
}

// portfolio섹션 등장 이벤트    
function portfolioItemUp() {
    portfolioItem.forEach(item => {
        let itemUpPOS = item.offsetTop - (window.innerHeight * 0.3);
        
        if(pos > itemUpPOS) {
            item.classList.add("up");
        };
    });
}