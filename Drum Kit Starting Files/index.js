var numberOfDrumButtons  = document.querySelectorAll(".drum").length;
for(var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
        buttonAnimation(buttomInnerHTML);
        
    })
    document.addEventListener("keydown", function(event){
        // alert("key was pressed !!");
        makeSound(event.key);
        buttonAnimation(event.key);
    })
/*
function anotherAddEventListener(typeOfEvent, callbackFunc){
    // detect event code
    // object
    eventThatHappened = {
        eventType = "keypress";
        key = "s";
        durationOfKeypress = 2 seconds;

    }
    if(eventThatHappened.eventType == typeOfEvent){
        callbackFunc(eventThatHappened);
    }
}
anotherAddEventListener("keypress", function(event){
    console.log(event);
});
*/
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 200); // 200 for 0.2 seconds.
    }

    function makeSound(key){
        switch(key){
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
                console.log(this.innerHTML);
        }
    }

}
/*
for(var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
    
    function handleClick(){
        // alert("i got clicked !!");
        // var audio = new Audio("sounds/tom-2.mp3");
        // audio.play();
        // console.log(this.innerHTML);
        this.style.color = 'black';
    }
}
*/

// higher order functions
// function add(num1, num2){
//     return num1 + num2;
// }
// function subtract(num1, num2){
//     return num1 - num2;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function divide(num1, num2){
//     return num1 / num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1,num2);
// }