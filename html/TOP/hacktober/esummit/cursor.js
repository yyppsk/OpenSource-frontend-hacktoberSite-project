const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#680060",
//   "#60005f",
//   "#48005f",
//   "#3d005e"
// ];

// const colors = [
//   "#000080", // Navy Blue
//   "#00008B", // Dark Blue
//   "#191970", // Midnight Blue
//   "#483D8B", // Dark Slate Blue
//   "#4B0082", // Indigo
//   "#6A5ACD", // Slate Blue
//   "#483D8B", // Dark Slate Blue
//   "#00008B", // Dark Blue
//   "#000080", // Navy Blue
//   "#000033", // Dark Midnight Blue
//   "#000022", // Dark Cosmic Blue
//   "#000011", // Ultra Dark Cosmic Blue
//   "#1E90FF", // Dodger Blue
//   "#4169E1", // Royal Blue
//   "#000080", // Navy Blue
//   "#00008B", // Dark Blue
//   "#191970", // Midnight Blue
//   "#483D8B", // Dark Slate Blue
//   "#4B0082", // Indigo
//   "#6A5ACD", // Slate Blue
//   "#483D8B"  // Dark Slate Blue
// ];

const colors = [
  "#000080", // Navy Blue
  "#001f3f", // Dark Blue
  "#00346e", // Deep Blue
  "#00519f", // Royal Blue
  "#0073cf", // Blue
  "#0097ff", // Sky Blue
  "#00bcff", // Light Blue
  "#00e3ff", // Very Light Blue
  "#00ffff", // Cyan
  "#00e3ff", // Very Light Blue
  "#00bcff", // Light Blue
  "#0097ff", // Sky Blue
  "#0073cf", // Blue
  "#00519f", // Royal Blue
  "#00346e", // Deep Blue
  "#001f3f", // Dark Blue
  "#000080"  // Navy Blue
];



circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  // console.log("activated");
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
