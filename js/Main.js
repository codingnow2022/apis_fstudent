// const container = document.querySelector(".container-cards");
// let isDown = false;
// let startX;
// let scrollLeft;

// container.addEventListener("mousedown", (e) => {
//   isDown = true;
//   container.classList.add("active");
//   startX = e.pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
// });

// container.addEventListener("mouseleave", () => {
//   isDown = false;
//   container.classList.remove("active");
// });

// container.addEventListener("mouseup", () => {
//   isDown = false;
//   container.classList.remove("active");
// });

// container.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - container.offsetLeft;
//   const walk = (x - startX) * 2; // Aumenta el factor de desplazamiento
//   container.scrollLeft = scrollLeft - walk;
// });


// var container = document.querySelector('.container-cards');
// var isDragging = false;
// var startX;
// var scrollLeft;

// container.addEventListener('mousedown', function(e) {
//   isDragging = true;
//   startX = e.pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
// });

// container.addEventListener('mouseleave', function() {
//   isDragging = false;
// });

// container.addEventListener('mouseup', function() {
//   isDragging = false;
// });

// container.addEventListener('mousemove', function(e) {
//   if (!isDragging) return;
//   e.preventDefault();
//   var x = e.pageX - container.offsetLeft;
//   var walk = (x - startX) * 2; // Ajusta la velocidad del arrastre según tus necesidades
//   container.scrollLeft = scrollLeft - walk;
// });
function activarMenu() {
  let menuOculto = document.getElementById("menu-oculto");
  let body = document.querySelector("body");

  body.classList.toggle("ovfh")
  menuOculto.classList.toggle("active");
}

var container = document.querySelector('.container-cards');
var isDragging = false;
var startX;
var scrollLeft;

container.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', function() {
  isDragging = false;
});

container.addEventListener('mouseup', function() {
  isDragging = false;
});

container.addEventListener('mousemove', function(e) {
  if (!isDragging) return;
  e.preventDefault();
  var x = e.pageX - container.offsetLeft;
  var walk = (x - startX); // Ajusta la velocidad del arrastre según tus necesidades
  var newScrollLeft = scrollLeft - walk;
  
  requestAnimationFrame(function() {
    container.scrollLeft = newScrollLeft;
  });
});
