$(document).ready(function(){

    setUpPie();
    function setUpPie(){
        $('.chart').easyPieChart({
             //your configuration goes here
             barColor: '#f08b65',
             trackColor: '#cccccc',
             scaleColor: false,
             lineWidth: 5,
             size: 120
         });
    }



});