const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

document.querySelectorAll(".filter-buttons button").forEach((button) => {
    button.addEventListener("click", function () {
        // Remove .active from all buttons
        document
            .querySelectorAll(".filter-buttons button")
            .forEach((btn) => btn.classList.remove("active"));
        // Add .active to the clicked button
        this.classList.add("active");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.id = "show";
        } else {
            entry.target.id = " ";
        }
    });
});

const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el) => observer.observe(el));

function filterCards(category) {
    const cards = document.querySelectorAll(".card");

    const buttons = document.querySelectorAll(".filter-buttons button");

    cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        const shouldShow = category === "all" || cardCategory === category;

        if (shouldShow) {
            // Zeige Karte an
            card.classList.remove("hide-anim");
            card.style.display = "flex";

            // Trigger Animation (reflow)
            void card.offsetWidth;

            card.classList.add("show");
        } else {
            // Animiert ausblenden
            card.classList.remove("show");
            card.classList.add("hide-anim");

            // Nach der Animation -> display: none setzen
            setTimeout(() => {
                card.style.display = "none";
            }, 500); // Muss zur transition-Dauer in CSS passen
        }
    });

    // buttons.forEach((btn) => btn.classList.remove("active"));
    // document
    //     .querySelector(`.filter-buttons button[onclick*="${category}"]`)
    //     ?.classList.add("active");
}

filterCards("all");

const regex = new RegExp("^[A-Z][a-z]+$");

const genderInput = document.getElementById("genderInput");
const genderBtn = document.getElementById("genderSubmit");
const genderError = document.getElementById("errorTextGender");
const genderResult = document.getElementById("resultTextGender");

genderBtn.addEventListener("click", async () => {
    genderError.innerText = " ";
    try {
        const name = genderInput.value;
        if (!regex.test(name)) {
            throw new Error("Bitte einen Namen eingeben.");
            return;
        }
        const data = await fetch(`https://api.genderize.io?name=${name}`);
        const response = await data.json();
        const gender = response.gender === "male" ? "männlich" : "weiblich";
        genderResult.innerText = `Dein Geschlecht mit dem Namen ${name} ist zu ${
            response.probability * 100
        }% ${gender}.`;
    } catch (e) {
        genderError.innerText = e.toString().replace(/^Error:\s*/, "");
    }
});

const ageInput = document.getElementById("ageInput");
const ageBtn = document.getElementById("ageSubmit");
const ageError = document.getElementById("errorTextAge");
const ageResult = document.getElementById("resultTextAge");

ageBtn.addEventListener("click", async () => {
    ageError.innerText = " ";
    try {
        const name = ageInput.value;
        if (!regex.test(name)) {
            throw new Error("Bitte einen Namen eingeben.");
            return;
        }
        const data = await fetch(`https://api.agify.io?name=${name}`);
        const response = await data.json();
        ageResult.innerText = `Dein Alter nach deinem Namen ${name} ist durchschnittlich ${response.age} Jahre.`;
    } catch (e) {
        ageError.innerText = e.toString().replace(/^Error:\s*/, "");
    }
});

const yearText = document.getElementById("year");

const currYear = new Date().getFullYear();
yearText.innerText = currYear;
