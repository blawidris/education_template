let select = (query, bool) => {
  if (bool) {
    return document.querySelectorAll(+query);
  } else {
    return document.querySelector(query);
  }
};

// Main header
let mainHeader = this.document.querySelector(".main-header");
let navHeader = document.querySelector("#nav-header");
window.addEventListener("scroll", function (e) {
  e.preventDefault();

  let yOffset = this.pageYOffset;
  if (yOffset > mainHeader.clientHeight) {
    navHeader.classList.add("fixed-top");
  } else {
    navHeader.classList.remove("fixed-top");
  }
});

// Mobile Menu
let mobileMenu = document.querySelector("#mobile-menu");
mobileMenu.addEventListener("click", function (e) {
  e.preventDefault();
  let mainNav = document.querySelector(".main-nav");
  let menuIcon = document.querySelector("#mobile-menu i");
  mainNav.classList.toggle("active");
  menuIcon.classList.toggle("bi-x");
  menuIcon.classList.toggle("bi-list");
  // console.log(e)
});

// countdown

let countDigit = document
  .querySelector(".counter-digit")
  .getAttribute("data-date");
let countDown = new Date(countDigit).getTime();

let x = setInterval(function () {
    let dateNow = new Date().getTime();
  // date diff
  let diff = countDown - dateNow;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //   display result
    let timeDay = document.querySelector('.time-day');
    let timeHour = document.querySelector('.time-hour');
    let timeMin = document.querySelector('.time-min');
    let timeSecs = document.querySelector('.time-secs');

    timeDay.innerHTML = days;
    timeHour.innerHTML = hours;
    timeMin.innerHTML = minutes;
    timeSecs.innerHTML = seconds;

    if(diff === 0 || diff < 0){
        clearInterval(x)
        timeDay.innerHTML = 0;
        timeHour.innerHTML = 0;
        timeMin.innerHTML = 0;
        timeSecs.innerHTML = 0;
    }

}, 1000);

console.log(countDigit);
