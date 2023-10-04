gsap.registerPlugin(ScrollTrigger);
const blurElements = document.querySelectorAll(
  ".competition-content-section-right-blur-background"
);
blurElements.forEach((element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      //   markers:true,
      toggleActions:"restart restart none none",
      start: "10px 90%", // Start the animation when the element's top reaches the center of the viewport
      //   end: "bottom center", // End the animation when the element's bottom reaches the center of the viewport
      //   scrub: true, // Smoothly animate the width change as you scroll
    },
  });

  // Add animation to the timeline
  tl.to(element, { width: "0%", duration: 2 });
});

// for competitions parallax

var competitionImages = document.querySelectorAll(".competition-content");
// console.log(competitionImages)

// gsap.utils.toArray(".competition-content").forEach((section, i) => {
//   const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
//   console.log(section)
//   gsap.fromTo(
//     section,
//     {
//       y: -heightDiff,
//     },
//     {
//       scrollTrigger: {
//         trigger: section.parentElement,
//         scrub: true,
//       },
//       y: 0,
//       ease: "none",
//     }
//   );
// });

// window.onscroll = function(){

//   competitionImages.forEach((section,i)=>{
//     // console.log(section)
//     var scrollTop =  (document.documentElement || document.body.parentNode || document.body).scrollTop
//     // let intialPosition = window.getComputedStyle(section).backgroundPositionY;
//     // section.style.backgroundPositionY = "calc( " + scrollTop/10 + "px " + intialPosition + " )";
//     // console.log( intialPosition)

//     var positionY = scrollTop/2;
//    section.style.backgroundPosition = "0 -" + positionY + "px";

//   })
// }
