






gsap.registerPlugin(ScrollTrigger); // Activating ScrollTrigger



// DOESNT WORK // Hiding browser's address bar 
// window.addEventListener("DOMContentLoaded",function() {
//     setTimeout(function(){
//         // This hides the address bar:
//         window.scrollTo(0, 1);
//         window.innerHeight += 1;
//     }, 0);
// });













// @@@@@@@@@@@@@@@@@@@@ Dark Mode @@@@@@@@@@@@@@@@@@@@

// This stores the info for the last choice of user, like cookies. No expiration.
// This property is all stored locally, no server related, biggest difference from cookies.
let darkMode = localStorage.getItem("darkMode");

// This is the button that user interact in order to change the theme.
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Main logic is like this:
// Check if dark mode is enabled
// If it is enable, disable it.
// If it is disabled, enable it.

const enableDarkMode = function(){
  // Add related dark mode classes into elements
  $("body").addClass("darkmode-body");
  $("input, textarea").addClass("darkmode-form");
  $("#hero").addClass("darkmode-hero");
  $("#about-me").addClass("darkmode-about-me");
  $("#skills").addClass("darkmode-skills");
  $("#projects").addClass("darkmode-projects");
  $("#contact-me").addClass("darkmode-contact-me");
  $("#footer").addClass("darkmode-footer");



  // Update dark mode preference in local storage
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = function(){
  // Remove related dark mode classes into elements
  $("body").removeClass("darkmode-body");
  $("input, textarea").removeClass("darkmode-form");
  $("#hero").removeClass("darkmode-hero");
  $("#about-me").removeClass("darkmode-about-me");
  $("#skills").removeClass("darkmode-skills");
  $("#projects").removeClass("darkmode-projects");
  $("#contact-me").removeClass("darkmode-contact-me");
  $("#footer").removeClass("darkmode-footer");


  // Update dark mode preference in local storage
  localStorage.setItem("darkMode", null);
}

// When the page first loads, remember choice
if(darkMode === "enabled"){
  enableDarkMode();
  $(".dark-mode-toggle-image").addClass("turn-toggle-img");
  // Here will be required the "turn-toggle-img" most probably
} else{
  $(".dark-mode-toggle-image").removeClass("turn-toggle-img");
}


darkModeToggle.addEventListener("click", function(){
  // Every time button is pressed, update darkMode in localStorage
  darkMode = localStorage.getItem("darkMode");

  if(darkMode !== "enabled"){
    enableDarkMode();
    $(".dark-mode-toggle-image").addClass("turn-toggle-img");
  }else{
    disableDarkMode();
    $(".dark-mode-toggle-image").removeClass("turn-toggle-img");
  }
});
















// Fetch contact mails
const form = document.getElementById("contact-form");
const messageContainer = document.getElementById("message-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  fetch("https://formspree.io/f/mzbqaadk", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      messageContainer.textContent = "Your message has successfully sent, thank you!";
      messageContainer.style.display = "flex";
      form.reset();
    } else {
      throw new Error("Sorry, something went wrong while sending your message.");
    }
  })
  .catch(error => {
    console.error(error);
    messageContainer.textContent = "Sorry, something went wrong while sending your message.";
    messageContainer.style.display = "flex";
  });
});



// On hover show corresponding skill text
$(".skill-img__top-div").hover(function(){
  $(".frontend-text").toggleClass("active");
});
$(".skill-img__mid-div").hover(function(){
  $(".tool-text").toggleClass("active");
});
$(".skill-img__bottom-div").hover(function(){
  $(".backend-text").toggleClass("active");
});



// On hover show skills
$(".skill-img__top-div").hover(function(){
  $(".skill-box--frontend").toggleClass("active");
  $(".skills-text").toggleClass("passive");
  $(".skills-container").toggleClass("justify-center");
});
$(".skill-img__mid-div").hover(function(){
  $(".skill-box--tool").toggleClass("active");
  $(".skills-text").toggleClass("passive");
  $(".skills-container").toggleClass("justify-center");
});
$(".skill-img__bottom-div").hover(function(){
  $(".skill-box--backend").toggleClass("active");
  $(".skills-text").toggleClass("passive");
  $(".skills-container").toggleClass("justify-center");
});



// Top div on hover animate skill images having ".frontend"
$(".skill-img__top-div").hover(function(){
  $(".frontend").animate({
    opacity: 1,
    left: "-=10"
  }, 100, function(){
    // Animated
  });
});
$(".skill-img__top-div").mouseleave(function(){
  $(".frontend").animate({ opacity: 0 }, 1, function(){
    // Animated
  });
});


// Middle div on hover animate skill images having ".tool"
$(".skill-img__mid-div").hover(function(){
  $(".tool").animate({
    opacity: 1,
    left: "-=10"
  }, 100, function(){
    // Animated
  });
});
$(".skill-img__mid-div").mouseleave(function(){
  $(".tool").animate({ opacity: 0 }, 1, function(){
    // Animated
  });
});


// Bottom div on hover animate skill images having ".backend"
$(".skill-img__bottom-div").hover(function(){
  $(".backend").animate({
    opacity: 1,
    left: "-=10"
  }, 100, function(){
    // Animated
  });
});
$(".skill-img__bottom-div").mouseleave(function(){
  $(".backend").animate({ opacity: 0 }, 1, function(){
    // Animated
  });
});



// In order to make it more understandable, following code is way more commented that it needs to be.
// When hoverable parts is visible in viewport, do this animation:
gsap.from(".skill-img__ind-wrapper", { // for "at" class, from -40 of its real position to its real position
  scrollTrigger: ".skill-img__ind-wrapper", // activate animation when "at" class is visible on viewport
  x: -40, // start 40px left, then go real position
  opacity: 0, // start 0 opacity, then go real opacity (1)
  duration: 1, // all stuff lasts 1 second
  ease:"power1.out", // ease-out (start fast, finish slow)

  /* stagger breaks the animation for some reason */
  /* The reason is to use transition and gsap at the same element. */
  /* Solution is putting them into a div, and animating the div itself, not touching the element. */
  stagger:0.2 // if there is more than 1 component having "at", set 0.2 second delay for next one
});



// Hero title and hero nav link animations
gsap.timeline()
  .from(".hero-title",  {
    scrollTrigger: ".hero-title",
    x: 40,
    opacity: 0,
    duration: 1,
    ease:"power1.out",
    stagger:0.2,
  })
  .from(".hero-nav-link", {
    scrollTrigger: ".hero-nav-link",
    x: 40,
    opacity: 0,
    duration: .5,
    ease:"power1.out",
    stagger:0.2
  })
  .from(".hero-contact-nav", { // Hero contact nav animation
    scrollTrigger: ".hero-contact-nav",
    y: -40,
    opacity: 0,
    duration: 1,
    ease:"power1.out",
    stagger:-0.1
  });


// Footer contact nav animation
gsap.from(".footer-contact-nav", {
  scrollTrigger: {
    trigger: ".footer-contact-nav"
  },
  y: -40,
  opacity: 0,
  duration: 1,
  ease:"power1.out",
  stagger:0.1
});


// skills-text class revealing & hiding animations
const skillsTextAnimation = gsap.from(".skills-text", {
  // Animation applied to skills-text
  scrollTrigger: {
    trigger: ".skills-text" // when skill-text is visible on screen
  },
  y: -40,
  opacity: 0,
  duration: 1,
  ease:"power1.out",
  stagger:0.2
});
// An event listener to trigger the animation once more when displayed
$(".skill-img-wrapper").mouseleave(function() {
  skillsTextAnimation.restart();
  // restart the animation when hovering on skill-img-wrapper is done.
});



// Corresponding skill stack text animation for revealing (Frontend)
const skillsStackTextAnimationFrontend = gsap.from(".frontend-text", {
  // animation is applied on .frontend-text
  scrollTrigger: ".frontend-text",
  // when .frontend-text is visible on screen
  x: 40,
  opacity: 0,
  duration: 0.5,
  ease:"power1.out",
});
// An event listener to trigger the animation once more when displayed
$(".skill-img__top-div").hover(function(){
  skillsStackTextAnimationFrontend.restart();
  // Each hover on ".skill-img__top-div" restarts revaling animation
});


// Corresponding skill stack text animation for revealing (Tool)
const skillsStackTextAnimationTool = gsap.from(".tool-text", {
  // animation is applied on .tool-text
  scrollTrigger: ".tool-text",
  // when .tool-text is visible on screen
  x: 40,
  opacity: 0,
  duration: 0.5,
  ease:"power1.out",
});
// An event listener to trigger the animation once more when displayed
$(".skill-img__mid-div").hover(function(){
  skillsStackTextAnimationTool.restart();
  // Each hover on ".skill-img__mid-div" restarts revaling animation
});


// Corresponding skill stack text animation for revealing (Backend)
const skillsStackTextAnimationBackend = gsap.from(".backend-text", {
  // animation is applied on .backend-text
  scrollTrigger: ".backend-text",
  // when .backend-text is visible on screen
  x: 40,
  opacity: 0,
  duration: 0.5,
  ease:"power1.out",
});
// An event listener to trigger the animation once more when displayed
$(".skill-img__bottom-div").hover(function(){
  skillsStackTextAnimationBackend.restart();
  // Each hover on ".skill-img__bottom-div" restarts revaling animation
});






// About me title and text animations
gsap.from(".about-me-title",  {
    scrollTrigger: ".about-me-title",
    y: -40,
    opacity: 0,
    duration: 1,
    ease:"power1.out"
  });
  gsap.from(".about-me-content",  {
      scrollTrigger: ".about-me-content",
      x: -40,
      opacity: 0,
      duration: 1,
      ease:"Back.easeOut",
      stagger: .3
    });
    gsap.from(".about-me-img",  {
        scrollTrigger: ".about-me-img",
        x: 40,
        opacity: 0,
        duration: 1,
        ease:"Back.easeOut",
        stagger: .3
      });

  // .from(".about-me-img", {
  //   scrollTrigger: "#about-me",
  //   x: 40,
  //   opacity: 0,
  //   duration: .5,
  //   ease:"power1.out",
  //   stagger:0.2
  // });





  // skills title animation
  gsap.from(".skills-title",  {
      scrollTrigger: ".skills-title",
      y: -40,
      opacity: 0,
      duration: 1,
      ease:"power1.out",
      stagger:0.2,
    });




    // Projects title and text animations
    gsap.from(".projects-title",  {
        scrollTrigger: ".projects-title",
        y: -40,
        opacity: 0,
        duration: 1,
        ease:"power1.out"
      });

    gsap.from(".projects-left1",  {
        scrollTrigger: ".projects-left1",
        x: -40,
        opacity: 0,
        duration: 1,
        ease:"Back.easeOut",
        stagger: .5
      });

    gsap.from(".projects-right1",  {
        scrollTrigger: ".projects-right1",
        x: 40,
        opacity: 0,
        duration: 1,
        ease:"Back.easeOut",
        stagger: .5
      });

      gsap.from(".projects-left2",  {
          scrollTrigger: ".projects-left2",
          x: -40,
          opacity: 0,
          duration: 1,
          ease:"Back.easeOut",
          stagger: .5
        });

      gsap.from(".projects-right2",  {
          scrollTrigger: ".projects-right2",
          x: 40,
          opacity: 0,
          duration: 1,
          ease:"Back.easeOut",
          stagger: .5
        });



// Contact Me Animations
gsap.from(".contact-title",  {
    scrollTrigger: ".contact-title",
    y: -40,
    opacity: 0,
    duration: 1,
    ease:"power1.out"
});
gsap.from(".contact-animation", {
    scrollTrigger: ".contact-animation",
    x: -40,
    opacity: 0,
    duration: .5,
    ease:"power1.out",
    stagger:0.2
});







// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ OPTIMIZATION @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Can be done like Left-to-right animations, right to left etc.
// Following example is for right to left.

// const stackFields = [
//   {
//     selector: ".frontend-text",
//     trigger: ".skill-img__top-div",
//   },
//   {
//     selector: ".tool-text",
//     trigger: ".skill-img__mid-div",
//   },
//   {
//     selector: ".backend-text",
//     trigger: ".skill-img__bottom-div",
//   },
// ];
//
// function animateStackField({selector, trigger}) {
//   return gsap.from(selector, {
//     scrollTrigger: {
//       trigger,
//     },
//     x: 40,
//     opacity: 0,
//     duration: 0.5,
//     ease: "power1.out",
//   });
// }
//
// const skillsStackTextAnimations = stackFields.map(animateStackField);
//
// skillsStackTextAnimations.forEach((animation, i) => {
//   const trigger = stackFields[i].trigger;
//   $(trigger).hover(() => {
//     animation.restart();
//   });
// });
