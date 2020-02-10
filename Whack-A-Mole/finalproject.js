
var score = 0;
var randMole;// = Math.floor((Math.random() * 8) + 1  );
var time = 30;
var boinkSound = new Audio("Boink2.mp3");

$('.mole').click(function(){
        $(this).slideUp();
        score++;
        $("#score").text(score);
        boinkSound.play(); 
    }
);

$('#start').click(function() {
        $('.mole').slideUp();
        var moleShowing = setInterval(function showMole() {
            var randMole = Math.floor((Math.random() * 8) + 1  );
            $(".mole"+randMole).slideDown();
            setTimeout(function hideMole() {
                $(".mole"+randMole).slideUp();
                },1500)
            console.log(randMole);
        }, 500),;
        var timerStopping = setInterval(function timeCoundown(){
            time--;
            $("#time").text(time); 
        }, 1000)
        if (time <= 0) {
            function timerstop() {
                clearInterval(moleShowing);
                clearInterval(timerStopping);
            } 
        }
    },
     
);



 




