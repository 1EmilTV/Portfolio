const btn = document.getElementById("eye");

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
	strings: ["Developer", "Schüler", "Freund", "Gamer"],
	typeSpeed: 100,
	backSpeed: 80,
	loop: true,
	backDelay: 2500,
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
