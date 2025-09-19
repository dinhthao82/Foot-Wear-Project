// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownBtn = document.querySelector(".btn-dropdown");
//   const dropdownMenu = document.getElementById("user-dropdown-menu"); // Select by ID

//   dropdownBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     console.log(dropdownMenu);
//     // Append the dropdown menu to the body to ensure it is topmost
//     document.body.appendChild(dropdownMenu);

//     // You'll also need to reposition it relative to the button
//     const rect = dropdownBtn.getBoundingClientRect();
//     dropdownMenu.style.position = "absolute";
//     dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
//     dropdownMenu.style.left = `${rect.left + window.scrollX}px`;

//     // Show the menu
//     dropdownMenu.classList.toggle("show");
//   });
// });
