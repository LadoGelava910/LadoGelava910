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
  document.getElementById("swiper").style.display = "none";
}

document.getElementsByClassName("close_pop_up").map((item) => {
  return (item.onclick = function () {
    alert("button was clicked");
  });
});
