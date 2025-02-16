// Adding an event listener to the input field for the 'blur' event
document.getElementById("fname").addEventListener("blur", function() {
  // Convert the value of the input field to uppercase when the user leaves the input field
  this.value = this.value.toUpperCase();
});
