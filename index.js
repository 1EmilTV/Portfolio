const timer = document.getElementById("timer");
const targetDate = new Date("2025-08-11T00:00:00");

function updateTimer() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        timer.innerHTML = "Die Website ist jetzt online!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial call to set the timer immediately
