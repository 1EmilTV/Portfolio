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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
