$(function() {
    $.ajax({
        url: "./data/data.json",
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
                        let name = $(e.target).find("span").text();
                        let idx = $skill.name.indexOf(name);
                        console.log(name)
                        
                        $('#skillDetail').find("span")
                        .text(`${name}`)
                        // .html("<span />")
                        //  = `${name}<span>${$skill.percent[idx]}</span>`;
                        $('#skillDetail').find("p").text($skill.desc[idx]);
                    }
                })
            }

            
            const $attitude = data.attitude;

            if($attitude) {
                
            }
        },
        error: function(err) {
            console.log('통신실패');
        }
    })
})