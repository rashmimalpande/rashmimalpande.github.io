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
        var scrollPos = $(window).scrollTop(); /* scroll position of window*/

        if(scrollPos >= navOffset){
            $(".header").addClass("fixed")
        }
        else{
            $(".header").removeClass("fixed")
        }

    });

     $("#navigation ul li a").click(function(event){
         var linkHref = $(this).attr('href');
         
         $('html, body').animate({
             scrollTop: $(linkHref).offset().top
         });

        event.preventDefault();
    });
    

});
