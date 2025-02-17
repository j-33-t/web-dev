// Button Sound

function buttonSound() {
    var retroButton = new Audio("./sounds/button-click.mp3"); // Create an Audio object
    retroButton.play();
}

var buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttonSound();
    });
});


function randomSelector(){
    return Math.floor(Math.random() * 4);
}

function buttonFlash(){
    // Change bg-color of selected button to make it look like a flash
    var button = $("button").eq(randomSelector());
    button.css("background-color", "white");

    // Change back to original state after 250 milliseconds
    setTimeout(function() {
        button.css("background-color", "");
    }, 250);
}

var level = 1

if ($("h1").text() === "Press Any Key To Start") {
    $(document).on("keypress", function() {
        $("h1").text(`Level ${level}`);
    });
}


