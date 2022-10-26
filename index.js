// Detecting button press

var numberOfPianoButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfPianoButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", handleClick);
  function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  }
}

// Detecting Keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "c":
        var audio = new Audio('sounds/a-key.wav');
        audio.play();
      break;
    case "d":
        var audio = new Audio('sounds/b-key.wav');
        audio.play();
      break;
    case "e":
        var audio = new Audio('sounds/c-key.wav');
        audio.play();
      break;
    case "f":
        var audio = new Audio('sounds/d-key.wav');
        audio.play();
      break;
    case "g":
        var audio = new Audio('sounds/e-key.wav');
        audio.play();
      break;
    case "a":
        var audio = new Audio('sounds/f-key.wav');
        audio.play();
      break;
    case "b":
        var audio = new Audio('sounds/g-key.wav');
        audio.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}
