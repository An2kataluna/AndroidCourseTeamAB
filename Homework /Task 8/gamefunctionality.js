
// var time;
// var counter=0;
// function Timer(){
// 	document.getElementById("txt").value=counter;
// 	counter=counter+1;
// 	time=setTimeout(function(){ Timer() },1000);
// }

function StartGame(){
    var beggin= document.getElementById("starbtn");
    beggin.style.display = 'none';
    var game= document.getElementById("ingame");
    game.style.display = 'block';
    //Timer(); 
}

/*
<script>
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("timerPlacer").value = c;
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}
</script>


*/