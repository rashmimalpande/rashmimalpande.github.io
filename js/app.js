$(document).ready(function(){

    setUpPie();
    function setUpPie(){
        $('.chart').easyPieChart({
             //your configuration goes here
             barColor: '#f26419',
             trackColor: '#cccccc',
             scaleColor: false,
             lineWidth: 6,
             size: 120
         });
    }

    var navOffset = $(".header").offset().top; /* position of eader from the top */
    
    $(window).scroll(function(){
        var scrollPos = $(Window).scrollTop(); /* scroll position of window*/

        if(scrollPos >= navOffset){
            $(".header").addClass("fixed")
        }
        else{
            $(".header").removeClass("fixed")
        }

    });

    


});