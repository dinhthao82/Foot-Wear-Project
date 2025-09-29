let bShow = false;

document.addEventListener("DOMContentLoaded", function () {
  // Find the list of buttons by their parent ID
  const button_RETAIL = document.getElementById("btn-account");

  console.log("show", bShow);
  // Get the inner div with the class 'left-content'
  if (bShow) {
    const accountMenuDiv = document.querySelector(".accountMenu");

    accountMenuDiv.innerHTML = `
           <div class="dropdownMenu">
           <div class="dropdownItem">
           <i class="fa fa-user-circle" aria-hidden="true"></i> Profile</div>
           <div class="dropdownItem logout">
           <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</div>
           </div>`;
  }
  bShow = !bShow;
});
