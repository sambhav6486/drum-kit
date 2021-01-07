var button = document.querySelectorAll(".drum");
for (let buttons of button){
    buttons.addEventListener("click" , function(){
        var buttonInnerHtml = this.innerHTML
        sound(buttonInnerHtml)
        makeAnimation(buttonInnerHtml)
        
    })
}

document.addEventListener("keypress", function(e){
    var a = e.key;
    var keyboardKey = a.toLocaleLowerCase()
    sound(keyboardKey)
    makeAnimation(keyboardKey)
})


function makeAnimation(key){
    var keys = document.querySelector("." + key)
    keys.classList.add("pressed")
    setTimeout(function(){
        keys.classList.remove("pressed")
    }, 100)
}

function sound(value){
    switch (value) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
            case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
            case "s" :
                var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
            case "d" :
                var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
            case "j" :
                var tom2  = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
            case "k" :
                var tom3  = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
            case "l" :
                var tom4  = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        default: console.log(buttonInnerHtml)
            break;
    }
}