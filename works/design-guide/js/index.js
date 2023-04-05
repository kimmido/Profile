$(function() {
    let $target,$val,$img,$src;

    $('#wireframe, #grid').on("click", function() {
        $target = $(this).attr("id");
        $val = $target == "wireframe"? "grid":"wireframe";
        $img = $('.wireframe-grid-img img');
        $src = $img.attr("src");

        $img.attr("src", $src.replace($val, $target));
        
        $(this)
        .addClass("on")
        .siblings().removeClass("on");
    });
});