var submitButton;
var startingLPForm;
var endingLPForm;

var divider;

var fakeSubmit;

document.addEventListener("DOMContentLoaded", function(){
    divider = document.getElementById("formDiv");
    submitButton = document.getElementById("submit");
    startingLPForm = document.getElementById("startAmount");
    endingLPForm = document.getElementById("endAmount");
    fakeSubmit = document.getElementById("submitButton");
});

function submitForm() {
    var aaa = document.createElement("a");
    aaa.innerText = "womp womp";
    aaa.href = "display.html#start=" + startingLPForm.value + "&end=" + endingLPForm.value;
    alert(aaa.href);
    document.body.appendChild(aaa);
    aaa.click();
}