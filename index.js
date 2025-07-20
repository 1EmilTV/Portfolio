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
