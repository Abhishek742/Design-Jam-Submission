// document.body.style.msTransform =   'scale(100)';
//Navigation toggle script
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".link");
const navigation = document.querySelector("nav");

burger.addEventListener("click", () => {
  //  toggle buttons
  burger.classList.toggle("close");
  navigation.classList.toggle("nav-active");
});

//remove nav-active by clicking links

links.forEach((link) => {
  link.addEventListener("click", () => {
    //  toggle buttons
    burger.classList.toggle("close");
    navigation.classList.toggle("nav-active");
  });
});

// donut slider script
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

//Manual Navigation

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

//automatic navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

//card flip script

const card = document.querySelectorAll(".card__inner");

card.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("isflipped");
  });
});

//order online
const order = document.querySelector(".order");
const form = document.querySelector(".popup");
const close = document.querySelector(".close");
order.addEventListener("click", () => {
  form.classList.add("form-active");
});
close.addEventListener("click", () => {
  form.classList.remove("form-active");
});
