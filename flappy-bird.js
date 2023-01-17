var block = document.getElementById("block");
var hole = document.getElementById("Hole");
var character = document.getElementById("character")
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
})

setInterval(function(){
    var characterTop = parseInt(Window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop+3)+"px";
    }
    
    var blockLeft = parseInt(Window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(Window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop > 480) || ((blockLeft < 20) && (blockLeft >-50) && ((cTop < holeTop) || (cTop>holeTop+130)))) {
        alert("Game Over. Score: "+(counter-1))
    }
})