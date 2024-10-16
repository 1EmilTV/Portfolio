// Get the button:
let mybutton = document.getElementById("myBtn");
let logo = document.getElementById("logo");
let clock = document.getElementById("clock");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

if (screen.width > 768){
    window.onscroll = function() {scrollFunctionimg()};

    function scrollFunctionimg() {
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            logo.style.marginTop = "0";
        } else {
            logo.style.marginTop = "100px";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const menuTop = document.getElementById("menuTop");
const menuBottom = document.getElementById("menuBottom");
const btn = document.getElementById("close-btn");

if(window.screen.width <= 768) {
    menuTop.style.visibility = 'hidden';
    menuTop.style.opacity = '0';
    menuTop.style.height = '0';
    menuBottom.style.visibility = 'hidden';
    menuBottom.style.opacity = '0';
    menuBottom.style.height = '0';
}

btn.addEventListener('click', function(){
    if(menuBottom.style.visibility == 'hidden' && menuTop.style.visibility == 'hidden'){
        menuTop.style.visibility = 'visible';
        logo.style.visibility = 'hidden';
        menuTop.style.opacity = '1';
        menuTop.style.height = '100%';
        menuBottom.style.visibility = 'visible';
        menuBottom.style.opacity = '1';
        menuBottom.style.height = '100%';
    }
    else{
        menuTop.style.visibility = 'hidden';
        menuTop.style.opacity = '0';
        menuTop.style.height = '0';
        menuBottom.style.visibility = 'hidden';
        menuBottom.style.opacity = '0';
        menuBottom.style.height = '0';
        setInterval(1000,logo.style.visibility = 'visible')
    }
});

// btn.addEventListener('click', () => {
//     if(menuTop.style.display == 'flex' && menuBottom.style.display == 'block') {
//         menuTop.style.display = 'none';
//         menuBottom.style.display = 'none';
//     }
//     else {
//         menuTop.style.display = 'flex';
//         menuBottom.style.display = 'block';
//     }
// });

