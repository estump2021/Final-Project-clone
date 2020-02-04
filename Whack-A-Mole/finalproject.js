
var score = 0 
var randMole = Math.floor((Math.random() * 8) + 1  );

$('.mole').click(
    function(){
        $(this).slideUp();
        score++;
        $("#score").text(score);
        
    }
    
);
$('#start').click(function() {
        $('.mole').slideUp();
    }
);


setTimeout(function showMole() {
    //pick a number between 1 and 8
    var randMole = Math.floor((Math.random() * 8) + 1  );
    $(".mole"+randMole).slideDown();

    //setTimeout(alertFunc, 3000);
}, 3000) 
 




console.log(randMole);