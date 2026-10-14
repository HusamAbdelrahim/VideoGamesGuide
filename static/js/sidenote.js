
// 1. The basics

/* 

In JavaScript = the document is basically the whole page of what JS tends to see:

By using querySelectorAll what it's basically doing is that it's find every element that is exisitnig in the class which basically like how a CSS selector does.
By allowing the user to make changes 

And by using const that means your declaring a variable that can't be reassigned to something else 

Having console.log will print the result in the browser and will give us the return. In this instance we will be getting 5

const slides = document.querySelectorAll(".slide");
slides.length

console.log(slides);
console.log(slides.length);

*/


// 2. The loop

/*

Basically what is going on here is that the [0] is going to be the first number which in JavaScript starts at 0
The second title will start 1 

remove - takes the class off
add - add the class on

slides[0].classList.remove("active");
slides[1].classList.add("active");


// 3. Putting it together

/*

function showSlide(index) {...} Basically what it does is that it tends to create a resuable code that is with in showSlide and nothing will run unless if its get called in

index is basically the parameter and basically a placeholder on whatever number that passes through

slides.forEach(function (slide)) {...} this is basically the typical loop that you would see and each time slide is the current one 

function showSlide(index) {
    slides.forEach(function (index){
        slides.classList.remove("active");
    })
    slides[index].classList.add("active");
}

*/

// 4. nextSlide()

/*

This variable basically remembers which slide it's current;y showing. So instead of using "const" it's using "let" instead because the value will change.

let current = 0; 

current = index; inside showSLIDE will update a memory everytime slide is shown

const next = (current + 1) % slides.length;

5 divided by 5 would equal to 0 so after the last slide the inext doesn't go past 4

So lets say in console you put: showSlide(5) it's expected to crash. The slides ranges from 0-4 and by doing this your using a command that will go from [4] -> [0]

*/

/*
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slide-dot");
const track = document.querySelector(".slide-track");
const prevButton = document.querySelector(".slide-arrow.prev");
const nextButton = document.querySelector(".slide-arrow.next");
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);
let current = 0;
let timer;

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    current = index;

    track.style.transform = `translateX(-${index * 100}%)`;
}

function moveTrack(position, animation) {
    track.style.animation = animate ? "" : "none";
    track.style.transform = 'translateX(-${position * 100}%)';
}

function nextSlide() {
    current = current + 1;
    moveTrack(current, true);
    updateDots(current % slides.length);
}

track.addEventListener("transitionend", function () {
    if (current === slide.length) {
        current = 0;
        moveTrack(0, false);
    }
});

function updateDots(index) {
    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });
    dots[index].classList.remove("active");
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 12000);
}

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

startTimer();

*/