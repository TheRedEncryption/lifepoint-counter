var hashes;
var numberDiv;

var startNum;
var endNum;

var newNumber;

var diff;
const numFrames = 120;
var delta;

var done = false;

document.addEventListener("DOMContentLoaded", function(){
    hashes = window.location.hash.substring(1).split("&");
    numberDiv = document.getElementById("num");

    startNum = parseInt(hashes[0].substring(6));
    endNum = parseInt(hashes[1].substring(4));

    newNumber = startNum;

    numberDiv.innerHTML = startNum;

    diff = endNum - startNum;
    delta = diff / numFrames;

    setTimeout(startAnimating, 5000);
});

function startAnimating(){
    // alert(delta);
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
    }
   }
   else if(delta == 0){
   console.log("same");
   done = true;
   }
}