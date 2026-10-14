const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slide-dot");
const track = document.querySelector(".slide-track");
const prevButton = document.querySelector(".slide-arrow.prev");
const nextButton = document.querySelector(".slide-arrow.next");

const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

let current = 0;
let timer;

function moveTrack(position, animate) {
    if (animate) {
        track.style.transition = "";
    } else {
        track.style.transition = "none";
    }

    track.style.transform = `translateX(-${position * 100}%)`;
}

function updateDots(index) {
    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");
}

function showSlide(index) {
    current = index;
    moveTrack(index, true);
    updateDots(index);
}

function nextSlide() {
    current = current + 1;
    moveTrack(current, true);
    updateDots(current % slides.length);
}

function prevSlide() {
    const prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
}

track.addEventListener("transitionend", function () {
    if (current === slides.length) {
        current = 0;
        moveTrack(0, false);
    }
});

function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 12000);
}

nextButton.addEventListener("click", function () {
    nextSlide();
    startTimer();
});

prevButton.addEventListener("click", function () {
    prevSlide();
    startTimer();
});

dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        showSlide(index);
        startTimer();
    });
});

startTimer();