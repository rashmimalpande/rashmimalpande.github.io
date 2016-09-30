$(document).ready(function(){

    setUpPie();
    function setUpPie(){
        $('.chart').easyPieChart({
             //your configuration goes here
             barColor: '#74C7D5',
             trackColor: '#cccccc',
             scaleColor: false,
             lineWidth: 5,
             size: 120
         });
    }


     $(".navbar-default").sticky( {topSpacing: 0} );




});