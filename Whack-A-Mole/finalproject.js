
var score = 0 

$('.mole').click(
    function(){
        $(this).slideUp();
        score++;
        $("#score").text(score)
        $()
    
    }
    
);
$('#start').click(function() {
console.log("hello");
        $('.mole').slideUp()}
);
$('#slideUp').click(
        function() {
        $('.mole').slideDown();
  }
);




