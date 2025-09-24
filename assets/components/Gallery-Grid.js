const itemPerPage = 8;
let currentPage = 1;
const page = currentPage;
let _data;
let startIndex = 0,
  endIndex = 0;

function renderGalleryItems(data, page) {
  // Select the container where the items will be added
  const galleryContainer = document.querySelector(".gallery-container");

  _data = data;
  // Clear any existing content to prevent duplicates
  galleryContainer.innerHTML = "";
  startIndex = (page - 1) * itemPerPage;
  endIndex = Math.min(startIndex + itemPerPage, data.length);
  const slicedData = data.slice(startIndex, endIndex);

  console.log("slicedData", slicedData);
  console.log("page", page);
  console.log("startIndex", startIndex);
  console.log("endIndex", endIndex);
  // Loop through the data array and create an HTML element for each item
  slicedData.forEach((item) => {
    // Create the main gallery item div
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    // Use a template literal to build the inner HTML for the item
    galleryItem.innerHTML = `
      <div class="gallery-index">${item.id}</div>
      <div>
        <img
          src="${item.image}"
          alt="${item.description}"
          class="gallery-image"
        />
      </div>
      <div class="gallery-data">
        <div class="row-data">${item.brand}</div>
        <div class="row-data">${item.gender}</div>
        <div class="row-data">
          ${item.description}
        </div>
        <div class="gallery-details">
         <i class="fa fa-info" data-type="tooltip" alt="Chi Tiết"></i>
        </div>
      </div>
    `;

    // Append the newly created item to the gallery container
    galleryContainer.appendChild(galleryItem);
  });
}
function setNumberDiv() {
  const showNumberDiv = document.getElementById("shownumber");

  const showItem = document.createElement("div");
  showNumberDiv.innerHTML = "";

  showItem.innerHTML = `show ${endIndex - startIndex} total ${data.length}`;

  showNumberDiv.appendChild(showItem);
}
function setupPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = ""; // Clear existing controls
  console.log("paginationDiv", paginationDiv);

  console.log("_data", _data);
  const totalPages = Math.ceil(_data.length / itemPerPage);

  // Add Previous button
  const prevButton = document.createElement("button");
  prevButton.classList.add("pagination-buttonAction");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    currentPage--;
    renderGalleryItems(_data, currentPage);
    setupPagination();
    setNumberDiv();
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
      renderGalleryItems(_data, currentPage);
      setupPagination();
      setNumberDiv();
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
    renderGalleryItems(_data, currentPage);
    setupPagination();
    setNumberDiv();
  });
  paginationDiv.appendChild(nextButton);
}

// Call the function to render the items when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderGalleryItems(_data, currentPage);
  setupPagination();
  setNumberDiv();
});
