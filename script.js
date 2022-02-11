const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function close() {
  document.getElementById("swiper_wrapper").style.display = "none";
}

// Selecting elements.
const container = document.querySelector(".container");
const h1 = document.querySelector(".container h1");
// The clock function.
const clock = () => {
  //   Accessing the date object.
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  //   Adding a zero to the left of the time if it's less or equal   than 9.
  if (+hours <= 9) {
    hours = "0" + hours;
  } else if (+minutes <= 9) {
    minutes = "0" + minutes;
  } else if (+secondes <= 9) {
    secondes = "0" + secondes;
  }
  // adding the time to the h1 element.
  h1.innerHTML = hours + ":" + minutes;

  //Toggling the animate class.
  container.classList.toggle("animate");
};
// calling the clock function after each second(1000ms).
setInterval(clock, 1000);

document.getElementById("button_close").addEventListener("click", function () {
  close();
});
