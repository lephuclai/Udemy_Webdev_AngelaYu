let drumArr = document.querySelectorAll(".drum");

for(let i = 0; i < drumArr.length; i++) {
    drumArr[i].addEventListener("keydown", handlePress);
}

document.addEventListener("keydown", handlePress);

function playAudio (audioFile) {
    var audio = new Audio("sounds/" + audioFile + ".mp3");
    audio.play();
}

function handlePress(pressedKey) {
    switch (pressedKey.code) {
        case "KeyW":
            playAudio("tom-1");
            break;
    
        case "KeyA":
            playAudio("tom-2");
            break;
        
        case "KeyS":
            playAudio("tom-3");
            break;   
            
        case "KeyD":
            playAudio("tom-4");
            break;  

        case "KeyJ":
            playAudio("snare");
            break;  

        case "KeyK":
            playAudio("crash");
            break;  

        case "KeyL":
            playAudio("kick-bass");
            break;  
    }
}