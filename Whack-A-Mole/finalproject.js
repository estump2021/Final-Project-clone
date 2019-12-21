
var score = 0 

$('.mole').click(
    function(){
        $(this).slideUp();
        score++;
        $("#score").text(score)
        $()
    
    }
    
);
$('#start').click(
    function(){
        $('.mole').slideUp(function() {
        ('.mole').slideDown(500);
  })}
);
$('#slideUp').click(
        function() {
        $('.mole').slideDown();
  }
);




