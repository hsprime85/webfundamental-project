$(document).ready(function(){

    $("#max97black").hover(function(){
        $(this).attr({src:"images/airmax97white.jpg", alt:"97white"});
    },
        function(){
        $(this).attr({src:"images/airmax97black.jpg", alt:"97black"});
    });

    $("#flynitblack").hover(function(){
            $(this).attr({src:"images/flyknit3white.jpg", alt:"flyknitwhite"});
        },
        function(){
            $(this).attr({src:"images/flyknit3black.jpg", alt:"flyknitblack"});
        });
    
    $("#max2090black").hover(function(){
            $(this).attr({src:"images/max2090white.jpg", alt:"2090white"});
        },
        function(){
            $(this).attr({src:"images/max2090black.jpg", alt:"2090black"});
        });
    
    $("#max90black").hover(function(){
            $(this).attr({src:"images/max90white.jpg", alt:"90white"});
            },
        function(){
            $(this).attr({src:"images/max90black.jpg", alt:"90black"});
            });
    
    $("#max95black").hover(function(){
            $(this).attr({src:"images/max95white.jpg", alt:"95white"});
            },
        function(){
            $(this).attr({src:"images/max95black.jpg", alt:"95black"});
            });


    $("#vapormaxblack").hover(function(){
            $(this).attr({src:"images/vapormaxpluswhite.jpg", alt:"vapormaxwhite"});
            },
        function(){
            $(this).attr({src:"images/vapormaxplusblack.jpg", alt:"vapormaxblack"});
            });     


    $(".footerList").hover(function(){
        $(this).css("color", "white")
        },
        function(){
        $(this).css("color", "#bfbfbf")});


});
    


