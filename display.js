var hashes;
var numberDiv;

var startNum;
var endNum;

var newNumber;

var diff;
const numFrames = 120;
var delta;

var done = false;

var beepAudio;
var endAudio;


document.addEventListener("DOMContentLoaded", function(){
    hashes = window.location.hash.substring(1).split("&");
    numberDiv = document.getElementById("num");

    startNum = parseInt(hashes[0].substring(6));
    endNum = parseInt(hashes[1].substring(4));

    newNumber = startNum;

    numberDiv.innerHTML = startNum;

    diff = endNum - startNum;
    delta = diff / numFrames;

    beepAudio = new Audio('./assets/beep_full.wav');
    beepAudio.loop = true;
    beepAudio.volume = 0.6;

    endAudio = new Audio('./assets/finish-counting.wav');

    setTimeout(startAnimating, 5000);
});

function startAnimating(){
    // alert(delta);
    beepAudio.play();
    if(!done){
        requestAnimationFrame(startAnimating);
    }
   newNumber += delta;
   let newDisplayNumber = Math.round(newNumber);
   if(delta < 0){
    if(!(newNumber < endNum)){
        numberDiv.innerHTML = newDisplayNumber;
        console.log("dn");
    }
    else{
        numberDiv.innerHTML = endNum;
        done = true;
        beepAudio.loop = false;
    }
   }
   else if(delta > 0){
    if(!(newNumber > endNum)){
        numberDiv.innerHTML = newDisplayNumber;
        console.log("up");
    }
    else{
        numberDiv.innerHTML = endNum;
        done = true;
        beepAudio.loop = false;
    }
   }
   else if(delta == 0){
   console.log("same");
   done = true;
   beepAudio.loop = false;
   }
   if(done){
    beepAudio.pause();
    beepAudio.currentTime = 0;
    endAudio.play();
   }
}