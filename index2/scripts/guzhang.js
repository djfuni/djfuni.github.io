function triggerErrorEffect() {
  var errorElement = document.getElementById("error-effect");
  var replacementImage = document.getElementById("replacement-image");

  errorElement.style.display = "block";

  replacementImage.style.opacity = "1";
  replacementImage.style.pointerEvents = "auto";

  setTimeout(function() {
    replacementImage.style.opacity = "0";
    replacementImage.style.pointerEvents = "none";

    errorElement.style.display = "none";
  }, 5000);
}