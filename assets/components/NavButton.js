document.addEventListener("DOMContentLoaded", function () {
  // Find the list of buttons by their parent ID
  const buttons = document.querySelectorAll("#button-list .btn-image");

  // Loop through each button to add a click event listener
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // First, remove the active class from ALL buttons
      buttons.forEach((btn) => btn.classList.remove("active-btn"));

      // Then, add the active class to the button that was just clicked
      this.classList.add("active-btn");
    });
  });
});
