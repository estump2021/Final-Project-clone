
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
    var randMole = Math.random();
    $(".mole"+randMole).slideDown();

    //setTimeout(alertFunc, 3000);
}

var randMole = Math.floor(Math.random() * 10);



console.log(randMole);