
var score = 0;
var randMole;// = Math.floor((Math.random() * 8) + 1  );
var time = 30;
var boinkSound = new Audio("Boink3.mp3")

$('.mole').click(function(){
        $(this).slideUp();
        score++;
        $("#score").text(score);
        boinkSound.play(); 
    }
);

$('#start').click(function() {
        $('.mole').slideUp();
       var moleStop = setInterval(function showMole() {
            if (time == 0) {
                clearInterval(moleShowing);
            }
            var randMole = Math.floor((Math.random() * 8) + 1  );
            $(".mole"+randMole).slideDown();
            setTimeout(function hideMole() {
                $(".mole"+randMole).slideUp();
                },1500)
            console.log(randMole);
        }, 500);
        var timerstop = setInterval(function timeCoundown() {
            if (time == 0) {
                clearInterval(timerStop);
            }
            time--;
            $("#time").text(time); 
        }, 1000)
    },
     
);



 




