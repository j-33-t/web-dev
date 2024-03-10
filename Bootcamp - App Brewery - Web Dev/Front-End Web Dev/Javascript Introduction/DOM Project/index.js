document.querySelector(".instru1").addEventListener("click", playBass)
document.querySelector(".instru2").addEventListener("click", playHat)
document.querySelector(".instru3").addEventListener("click", playSnare)

function playBass(){
    var mysound = new Audio("./sounds/sound-1.mp3"); // Create an Audio object
    mysound.play(); // Play the audio

}

function playHat(){
    var mysound = new Audio("./sounds/sound-2.mp3"); // Create an Audio object
    mysound.play(); // Play the audio
}

function playSnare(){
    var mysound = new Audio("./sounds/sound-3.mp3"); // Create an Audio object
    mysound.play(); // Play the audio
}

document.addEventListener("keydown", function(event){
    if(event.key === "a"){playBass();}
    if(event.key === "s"){playHat();}
    if(event.key === "d"){playSnare();}
});