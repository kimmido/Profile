$(function() {
    $.ajax({
        url: "https://kimmido.github.io/data/profile.json",
        dataType: "json",
        success: function(data) {
            const $skillCube = data.skillCube;

            if($skillCube) {
                const $skill = $skillCube.skill;
                const $cube = $skillCube.cube;
                let result = "";

                $skill.name.forEach(name => {
                    result += '<div class="perspective">';
                    result += '<div class="cube click">';
                    $cube.forEach(cube => {
                        cube == "front" || cube == "back" ?
                        result += `<div class=${cube}><span>${name}</span></div>` :
                        result += `<div class=${cube}></div>`
                    });
                    result += '</div>';
                    result += '</div>';
                });
                
                $('#skillList').append(result);


                $('#skillList').on("click", function(e) {
                    if($(e.target).hasClass("cube")) {
                        let name = $(e.target).find(".front").find("span").text();
                        let idx = $skill.name.indexOf(name);
                        
                        $('#skillDetail').find("span").text(name);
                        $('#skillDetail').find("p").text($skill.desc[idx]);
                    }
                })
            }

            

            const $attitude = data.attitude;

            if($attitude) {
                for(let i in $attitude) {
                    $('#attitudeWrap .index').append($("<span class='click' />"));
                    $('#attitudeWrap .title').append($("<h4 />").text($attitude[i].title));
                    $('#attitudeWrap .attitude-txt').append($("<p />").text($attitude[i].txt));
                }
            }
        },
        error: function(err) {
            console.log('통신실패');
        }
    })
})