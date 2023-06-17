var toggleButton = document.getElementById("activate_drop");
var content = document.getElementById("java_drop_active");

toggleButton.addEventListener("click", function () {
  console.log(content.style.display)
  if (!content.style.display || content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById();

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }