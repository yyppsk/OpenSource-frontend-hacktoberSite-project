gsap.fromTo(
    ".landing-page img",
    { width: "60%" },
    { width: "50%", duration: 1 }
  );
  
  // rotating circle
  // gsap.fromTo(
  //   a".scene",
  //   { rotate: -35, x: -100, y: 100 },
  //   {
  //     rotate: 35,
  //     x: 100,
  //     // y: -100,
  //     // duration: 1,
  //     scrollTrigger: {
  //       trigger: ".scene",
  //       toggleActions: "restart restart reverse reverse",
  //       // markers: "true",
  //       start: "top bottom", // Change this according to your needs
  //       end: "bottom top", // Change this according to your needs
  //       scrub: true, // Enables scrubbing
  //     },
  //   }
  // );
  
  // rotating circle
  // gsap.fromTo(
  //   ".buildings",
  //   {  y: 0 , scale:1.5 },
  //   {
  //     y: -200,
  //     scale:1,
  //     // duration: 1,
  //     scrollTrigger: {
  //       trigger: ".buildings",
  //       toggleActions: "restart restart reverse reverse",
  //       // markers: "true",
  //       start: "top bottom", // Change this according to your needs
  //       end: "bottom top", // Change this according to your needs
  //       scrub: true, // Enables scrubbing
  //     },
  //   }
  // );
  
  gsap.fromTo(
    ".what-is-esummit-astronaut",
    {  y: 200 , x : 100 ,scale:0.5},
    {
      y: 10,
      scale:1,
      x: window.innerWidth - 50,
      // duration: 1,
      scrollTrigger: {
        trigger: ".what-is-esummit-astronaut",
        toggleActions: "restart restart reverse reverse",
        // markers: "true",
        start: "top bottom", // Change this according to your needs
        end: "bottom top", // Change this according to your needs
        scrub: true, // Enables scrubbing
        ease:Power3.easeIn
      },
    }
  );
  
  gsap.fromTo(
    ".astronaut-2",
    { y: 300,
      x: window.innerWidth/2   },
    {
      y: 0 , x : 0,
      // duration: 1,
      scrollTrigger: {
        trigger: ".astronaut-2",
        toggleActions: "restart restart reverse reverse",
        // markers: "true",
        start: "top bottom", // Change this according to your needs
        end: "bottom top", // Change this according to your needs
        scrub: true, // Enables scrubbing
      },
    }
  );
  
  gsap.fromTo(
    ".leftBackground",
    {  y: 600 },
    {
      y: 10,
      // duration: 1,
      scrollTrigger: {
        trigger: ".leftBackground",
        toggleActions: "restart restart reverse reverse",
        // markers: "true",
        start: "top bottom", // Change this according to your needs
        end: "bottom top", // Change this according to your needs
        scrub: true, // Enables scrubbing
      },
    }
  );
  
  gsap.fromTo(
    ".rightBackground",
    {  y: 500 },
    {
      y: 10,
      // duration: 1,
      scrollTrigger: {
        trigger: ".rightBackground",
        toggleActions: "restart restart reverse reverse",
        // markers: "true",
        start: "top bottom", // Change this according to your needs
        end: "bottom top", // Change this according to your needs
        scrub: true, // Enables scrubbing
      },
    }
  );
  
  elementClassNames = [".what-is-esummit-img",".what-is-esummit-heading",".what-is-esummit-content"]
  
  elementClassNames.forEach((className) => {
    gsap.fromTo(
      className,
      { x:-100,opacity:0 },
      {
        x: 0,
        opacity:1,
        duration: 0.5,
        scrollTrigger: {
          trigger: className,
          toggleActions: "restart none none none",
        },
      }
    );
  });
  
  gsap.fromTo(
    ".esummit-theme-left",
    { x:-100,opacity:0 },
    {
      x: 0,
      opacity:1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".esummit-theme-left",
        toggleActions: "restart none none none",
      },
    }
  );
  gsap.fromTo(
    ".esummit-theme-right",
    { x:300,opacity:0 ,
      webkitFilter:"blur(" + 10 + "px)"
    },
    {
      x: 0,
      opacity:1,
      duration: 1,
      webkitFilter:"blur(" + 0 + "px)",
      scrollTrigger: {
        trigger: ".esummit-theme-right",
        toggleActions: "restart none none none",
      },
    }
  );
  
  // Check the screen size before applying the GSAP animation
  function applyAnimation() {
    if (window.innerWidth >= 1000) {
      gsap.fromTo(
        ".buildings",
        { y: 0, scale: 1 },
        {
          y: -200,
          scale: 1.5,
          scrollTrigger: {
            trigger: ".buildings",
            toggleActions: "restart restart reverse reverse",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            ease:"none"
          },
        }
      );
    }else{
      gsap.fromTo(
        ".buildings",
        { scale: 1 },
        {
          scale: 1.5,
          scrollTrigger: {
            trigger: ".buildings",
            toggleActions: "restart restart reverse reverse",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            ease:"none"
          },
        }
      );
    }
  }
  
  // Initial check when the page loads
  applyAnimation();
  
  // Add an event listener to recheck when the window is resized
  window.addEventListener("resize", applyAnimation);
  
  // workshop circle in landing page
  var circle = document.querySelector(".main-page-workshop-home-circle")
  var circleWidth = circle.offsetWidth;
  var circle1 = document.querySelector(".main-page-workshop-home-arc")
  var circle1Width  = circle1.offsetWidth;
  // var circle2 = document.querySelector(".main-page-workshop-home-outer-circle1")
  // var circle2Width = circle2.offsetWidth;
  var circleOuter = document.querySelector(".main-page-workshop-home-outer-circle2")
  var circleOuterWidth = circleOuter.offsetWidth;
  // console.log(circleWidth,circle1Width,circleOuterWidth)
  
  let elementsForWorkshop = [".main-page-workshop-home-circle",".main-page-workshop-home-arc",".main-page-workshop-home-outer-circle2"]
  gsap.fromTo(
    ".main-page-workshop-home-circle",
    { left:  "calc(50% - " + circleWidth +" / 2)" },
    {
      left: -circleWidth/2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".main-page-workshop-home-circle",
        toggleActions: "restart restart restart restart",
      },
    }
  );
  gsap.fromTo(
    ".main-page-workshop-home-arc",
    { left:  "calc(50% - " + circle1Width +" / 2)" },
    {
      duration: 0.5,
      left: -circle1Width/2,
      scrollTrigger: {
        trigger: ".main-page-workshop-home-arc",
        toggleActions: "restart restart restart restart",
      },
    }
  );
  gsap.fromTo(
    ".main-page-workshop-home-outer-circle2",
    { left:  "calc(50% - " + circleOuterWidth +" / 2)" },
    {
      duration: 0.5,
      left: -circleOuterWidth/2,
      scrollTrigger: {
        trigger: ".main-page-workshop-home-outer-circle2",
        toggleActions: "restart restart restart restart",
      },
    }
  );