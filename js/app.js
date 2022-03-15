let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top");

let headerControl = new Waypoint({
  element: document.getElementById('about'),
  handler: function (direction) {
    if (direction === "down") {
      header.classList.add("shadow");
      header.classList.add("animate__slideInDown");
      scrollToTop.classList.remove("d-none");
      scrollToTop.classList.add("animate__slideInUp");
    } else {
      header.classList.remove("shadow");
      header.classList.remove("animate__slideInDown");
      scrollToTop.classList.add("d-none");
      scrollToTop.classList.remove("animate__slideInUp");

    }
  },
  offset: '75%'
})

let left = {
  origin: "left",
  distance: "150px",
  duration: 1500,
  delay: 200,
  reset: true
}

let right = {
  origin: "right",
  // distance: "150px",
  duration: 1500,
  delay: 200,
  reset: true
}

let bottom = {
  origin: "bottom",
  distance: "150px",
  duration: 1500,
  delay: 200,
  reset: true
}

let sTop = {
  origin: "top",
  distance: "150px",
  duration: 1500,
  delay: 200,
  reset: true
}

ScrollReveal().reveal(".left", left);
ScrollReveal().reveal(".right", right);
ScrollReveal().reveal(".bottom", bottom);
ScrollReveal().reveal(".sTop", sTop);
ScrollReveal({
  reset: true,
  delay: 200
}).reveal(".content");

ScrollReveal({
  reset: true,
  duration: 1000,
  delay: 400
}).reveal(".content1");


ScrollReveal({
  reset: true,
  duration: 1000,
  delay: 600
}).reveal(".content2");


ScrollReveal({
  reset: true,
  duration: 1000,
  delay: 800
}).reveal(".content3");


let navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", function () {


  setTimeout(function () {

    let result = document.getElementById("navbarSupportedContent").classList.contains("show");

    if (result) {
      document.querySelector(".menu-icon").classList.remove("fa-list");
      document.querySelector(".menu-icon").classList.add("fa-xmark");
    } else {
      document.querySelector(".menu-icon").classList.remove("fa-xmark");
      document.querySelector(".menu-icon").classList.add("fa-list");
    }

  }, 500);

})

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(l => {

  l.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
    document.querySelector(".menu-icon").classList.remove("fa-xmark");
    document.querySelector(".menu-icon").classList.add("fa-list");
  });

});


let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})

// $(window).on("load", function(){
//   $(".loader-container").fadeOut(500, function(){
//       $(this).remove();
//   });
// })

window.onload = function() {
  document.querySelector(".preloader").classList.add("d-none") ;
  document.querySelector(".loader-container").classList.add("d-none") ;
};