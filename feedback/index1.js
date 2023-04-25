btn = document.getElementById("eye");

btn.addEventListener("click", function() {

    var color = document.getElementById("white");
    if(color.className === "white") {
        color.className = "black";
    }
    else {
        color.className = "white";
    }

});

var typed = new Typed(".multiText", {
	strings: ["Danke!", "Thanks!", "Merci!", "Gracias!", "Спасибо!", "شكرًا!"],
	typeSpeed: 100,
	backSpeed: 80,
	loop: true,
	backDelay: 2500,
});
