window.onload = function() {
    const menuBt = document.querySelector(".mobile-menu-bt > .bt-box")

    menuBt.addEventListener("click", menuToggle);

    function menuToggle() {
        let list = this.parentNode.nextSibling.nextSibling;
        
        this.classList.toggle('on');
        list.classList.toggle('on');
        
        console.log(list);
    } 
}