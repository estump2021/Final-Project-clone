
var randMole;// = Math.floor((Math.random() * 8) + 1  );
var boinkSound = new Audio("Boink3.mp3")
var level = 4;

$('#start').click(function() {
    $('.mole').click(function(){
        $(this).slideUp();
        score++;
        $("#score").text(score);
        boinkSound.play(); 
    });
    $('.mole').slideUp();
    var score = 0;
    var time = 30;
    var timerstop = setInterval(function timeCoundown() {
            if (time == 0) {
                clearInterval(timerStop);
            }
            time--;
            $("#time").text(time); 
        }, 1000)
    if (level == 1) {
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
        setTimeout(function levelUp() {
            if (score >= 25) {
                level++;
                $("#level").text(level); 
                alert("you beat level 1! press start to play level 2.")
            } 
            else {
                alert("you Lose! press command + r to reset");
            }
        },32000)
    }
    if (level == 2) {
        $(".mole").css("background-image",'url("mole2.png")');
        var moleShowing = setInterval(function showMole() {
            if (time == 0) {
                clearInterval(moleShowing);
            }
            var randMole = Math.floor((Math.random() * 8) + 1  );
            $(".mole"+randMole).slideDown();
            setTimeout(function hideMole() {
                $(".mole"+randMole).slideUp();
                },1000)
            console.log(randMole);
        }, 500);
        setTimeout(function levelUp() {
            if (score >= 35) {
                level++;
                $("#level").text(level); 
                alert("you beat level 2! press start to play level 3!")
            } 
            else {
                alert("you Lose! press command + r to reset");
            }
        },32000)
    }
    if (level == 3) {
        $(".mole").css("background-image",'url("mole3.png")');
        $(".machine").css("background-image",'url("grassBackground3.jpg")');
        var moleShowing = setInterval(function showMole() {
            if (time == 0) {
                clearInterval(moleShowing);
            }
            var randMole = Math.floor((Math.random() * 8) + 1  );
            $(".mole"+randMole).slideDown();
            setTimeout(function hideMole() {
                $(".mole"+randMole).slideUp();
                },500)
            console.log(randMole);
        }, 500);
        setTimeout(function levelUp() {
            if (score >= 45) {
                level++;
                $("#level").text(" FINAL");
                alert("you beat level 3! press start to play level final!");
            } 
            else {
                alert("you Lose! press command + r to reset");
            }
        },32000)
     }
     if (level == 4)  {
         $(".machine").css("background-image",'url("underworldgateways4.jpg")');
         var moleShowing = setInterval(function showMole() {
            if (time == 0) {
                clearInterval(moleShowing);
            }
            var randMole = Math.floor((Math.random() * 8) + 1  );
            $(".mole"+randMole).slideDown();
            setTimeout(function hideMole() {
                $(".mole"+randMole).slideUp();
                },250)
            console.log(randMole);
        }, 250);
        setTimeout(function levelUp() {
            if (score >= 50) {
                alert("congratlations, you win!")
            } 
            else {
                alert("you Lose! press command + r to reset");
            }
        },32000)
     }     
},);


//open preview in browser: python3 -m http.server 3000