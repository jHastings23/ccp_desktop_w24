const typingText = "Welcome to My Common Class Project Website!";
let i = 0;
const speed = 100; 
function typeEffect() {
    if (i < typingText.length) {
        document.getElementById("typing-effect").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect; 
