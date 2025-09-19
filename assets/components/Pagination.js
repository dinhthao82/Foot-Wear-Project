function setupPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = ""; // Clear existing controls
  console.log("paginationDiv", paginationDiv);

  //   const totalPages = Math.ceil(_data.length / rowsPerPage);
  const totalPages = 10;
  const currentPage = 1;
  // Add Previous button
  const prevButton = document.createElement("button");
  prevButton.classList.add("pagination-buttonAction");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    currentPage--;

    setupPagination();
  });
  paginationDiv.appendChild(prevButton);

  // Add page number links
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;

    // Add a class for general button styling
    pageButton.classList.add("pagination-button");

    if (i === currentPage) {
      pageButton.style.fontWeight = "bold"; // Highlight active page
      pageButton.style.backgroundColor = "cyan";
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;

      setupPagination();
    });
    paginationDiv.appendChild(pageButton);
  }

  // Add Next button
  const nextButton = document.createElement("button");
  nextButton.classList.add("pagination-buttonAction");
  nextButton.innerText = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    currentPage++;

    setupPagination();
  });
  paginationDiv.appendChild(nextButton);
}

document.addEventListener("DOMContentLoaded", function () {
  setupPagination();
});
