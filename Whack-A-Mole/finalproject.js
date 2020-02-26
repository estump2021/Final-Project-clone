
var score = 0;
var randMole;// = Math.floor((Math.random() * 8) + 1  );
var time = 30;
var boinkSound = new Audio("Boink3.mp3")
var level = 2;

$('.mole').click(function(){
        $(this).slideUp();
        score++;
        $("#score").text(score);
        boinkSound.play(); 
    }
);

if (level == 1) {
    $('#start').click(function() {
        $('.mole').slideUp();
        var moleShowing = setInterval(function showMole() {
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
        setTimeout(function levelUp() {
            if (score >= 25) {
                level++;
                $("#level").text(level); 
            } 
            else {
                alert("you Lose! press command + r to reset");
            }
        },30000)
    },);
}
if (level == 2) {
    
}
if (level == 3) {

}



