
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
        $('.mole').slideUp();
    }
);

function showMole() {
    //pick a number between 1 and 8
    var randMole = function (Math.random) {
       
    };
    $(".mole"+randMole).slideDown();

    //setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}


