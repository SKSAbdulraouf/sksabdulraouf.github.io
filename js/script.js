//////Ensures that the Page always starts at the topmost when reloaded/refreshed//////
// window.onload = function() {
//   window.scrollTo(0, 0);
// }

// ------------------------------ HEADER COLORING FUNCTION WHEN SCROLLED ------------------------------
// ------------------------------ PAGE STICKY DISPLAY FUNCTION WHEN SCROLLED ------------------------------

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Change this value to the height where you want the color to change
  var scrollThresholdForHeader = 20;
  var scrollThresholdForPageScroller = 150;

  var targetHeader = document.getElementById("targetHeader");
  var targetScroller = document.getElementById("targetScroller");


  // If the scroll position is greater than the threshold, add the class to change color
  if (scrollPosition > scrollThresholdForHeader) {
    targetHeader.classList.add("scroll-color");
  } else {
    targetHeader.classList.remove("scroll-color");
  } 
  if (scrollPosition > scrollThresholdForPageScroller) {
    targetScroller.classList.remove("scroller-hide");
  } else {
    targetScroller.classList.add("scroller-hide");
  }

});

// ------------------------------ DARK MODE ------------------------------

function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");

  var toggle = document.getElementById("toggle");
  var logo = document.getElementById("logo");

  if (toggle.checked) {
    // Dark mode is enabled
    logo.src = "assets/SKSA logo white.svg";
  } else {
    // Light mode is enabled
    logo.src = "assets/SKSA logo.svg";
  }
}

// ------------------------------ SCROLL/ON CLICK "ACTIVATE" NAVBAR ------------------------------

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    // The value of 150 is used as a threshold to determine when a
    //section should be highlighted. In this case, the section will be highlighted when
    //the scroll position is within 250 pixels from the top of the section.
    //You can adjust this value to change the height at which the section's highlighting is triggered.

    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ------------------------------ REDIRECT TO MY EMAIL ------------------------------

function redirectToEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  // var mobile = document.getElementById("mobile").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var emailAddress = "sayyedkhatamiabdulraouf@gmail.com";
  var mailtoLink = "mailto:" + emailAddress +
                  "?subject=" + encodeURIComponent(subject) +
                  "&body=Name: " + encodeURIComponent(name) +
                  "%0D%0AEmail: " + encodeURIComponent(email) +
                  // "%0D%0AMobile: " + encodeURIComponent(mobile) +
                  "%0D%0AMessage: " + encodeURIComponent(message);

  window.location.href = mailtoLink;
}

// ------------------------------ DYNAMIC TITLE THAT CHANGES PROFESSION AT SET INTERVAL ------------------------------

var professions = [
  "UX/UI Designer",
  "Graphic Designer",
//  "Front End Developer",
//  "Dota 2 Initiator",

  // Add more professions here if needed
];

var currentIndex = 0; // Track the current index of the profession array

// Function to change profession dynamically 
function changeProfession() {
  // Get the profession at the current index
  var profession = professions[currentIndex];
  
  // Update the profession element with the current profession
  document.getElementById("profession").innerText = profession;
  
  // Increment the current index or reset to 0 if reached the end of the array
  currentIndex = (currentIndex + 1) % professions.length;
}

// Call function to change profession immediately
changeProfession();

// Change profession every 1.5 seconds
setInterval(function () {
  changeProfession();
}, 1500);


// ------------------------------ MENU AUTO CLOSE ------------------------------
