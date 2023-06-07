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