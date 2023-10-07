var hashes;
var numberDiv;

var startNum;
var endNum;

var diff;
const numFrames = 120;
var delta;

var done = false;

document.addEventListener("DOMContentLoaded", function(){
    hashes = window.location.hash.substring(1).split("&");
    numberDiv = document.getElementById("num");

    startNum = parseInt(hashes[0].substring(6));
    endNum = parseInt(hashes[1].substring(4));

    numberDiv.innerHTML = startNum;

    diff = endNum - startNum;
    delta = Math.round(diff / numFrames);

    setTimeout(startAnimating, 5000);
});

function startAnimating(){
    if(!done){
        requestAnimationFrame(startAnimating);
    }
   let newNumber = parseInt(numberDiv.innerHTML) + delta;
   if(delta < 0){
    if(!(newNumber < endNum)){
        numberDiv.innerHTML = newNumber;
        console.log("dn");
    }
    else{
        numberDiv.innerHTML = endNum;
        done = true;
    }
   }
   else if(delta > 0){
    if(!(newNumber > endNum)){
        numberDiv.innerHTML = newNumber;
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