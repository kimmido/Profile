$(function() {
    $.ajax({
        url: "https://kimmido.github.io/Profile/data/profile.json",
        dataType: "json",
        success: function(data) {
            const $attitude = data.attitude;

            if($attitude) {
                for(let i in $attitude) {
                    $('#attitudeWrap .index').append($("<span class='click' />"));
                }
                $('#attitudeWrap .index span').eq(0).addClass('on');
                $('#attitudeWrap .title h4').text($attitude[0].title);
                $('#attitudeWrap .attitude-txt p').text($attitude[0].txt);
                
                $('#attitudeWrap').on("click", function(e) {
                    if($(e.target).hasClass("click")) {
                        let idx = $('#attitudeWrap .index').find('.on').index();
                        $('#attitudeWrap .title h4').text($attitude[idx].title);
                        $('#attitudeWrap .attitude-txt p').text($attitude[idx].txt);
                        
                    }
                })
            }
        },
        error: function(err) {
            console.log('통신실패');
        }
    })
})