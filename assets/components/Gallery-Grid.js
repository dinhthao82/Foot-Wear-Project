const itemPerPage = 8;
let currentPage = 1;
const page = currentPage;
let _data;
let startIndex = 0,
  endIndex = 0;

const _detailDiv = ` <div class="gallery-details gallery-details-list">
      <i class="fa fa-info" data-type="tooltip" alt="Chi Tiết"></i>
    </div>`;

function renderGalleryItems_grid(data_input) {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = "";
  // Loop through the data array and create an HTML element for each item
  data_input.forEach((item) => {
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
      </div>
     ${_detailDiv}
    `;
    console.log("galleryItem", galleryItem);

    galleryContainer.appendChild(galleryItem);
  });
}

function renderGalleryItems_Table(data_input) {
  console.log("renderGalleryItems_Table-Body");

  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = "";

  const galleryTable = document.createElement("div");
  galleryTable.classList.add("gallery-table");
  galleryTable.style.width = "100%";
  galleryTable.innerHTML = `<table class="table-Gallery" >
  <thead class="table-Header">
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Make</th>
            <th>Shoe Type</th>
            <th>Model</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody class="table-Body" </tbody>
      </table>
      `;

  let table = galleryTable.querySelector(".table-Body");

  console.log("table-Body", table);

  data_input.forEach((item) => {
    // Insert new rows into the table body
    let img = document.createElement("img");

    img.src = item.image; // Replace with the actual path to your image

    img.alt = item.description;

    let tr = table.insertRow();
    tr.insertCell().textContent = item.id;
    tr.insertCell().appendChild(img);

    tr.insertCell().textContent = item.brand;
    tr.insertCell().textContent = item.gender;
    tr.insertCell().textContent = item.description;
    tr.insertCell().innerHTML = _detailDiv;
  });

  console.log("galleryTable", galleryTable);

  galleryContainer.appendChild(galleryTable);
}
function renderGalleryItems(data, page) {
  // Select the container where the items will be added

  _data = data;
  // Clear any existing content to prevent duplicates

  startIndex = (page - 1) * itemPerPage;
  endIndex = Math.min(startIndex + itemPerPage, data.length);
  const slicedData = data.slice(startIndex, endIndex);

  if (_galleryType === 0) renderGalleryItems_grid(slicedData);
  else renderGalleryItems_Table(slicedData);
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

document.addEventListener("DOMContentLoaded", () => {
  const button_grid = document.getElementById("btn-grid");
  const button_list = document.getElementById("btn-list");

  button_grid.addEventListener("click", () => {
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.style.display = "grid";

    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => (item.style.display = "flow"));

    const galleryData = document.querySelectorAll(".gallery-data");
    galleryData.forEach((item) => (item.style.display = "flow"));

    _galleryType = 0;

    renderGalleryItems(_data, currentPage);
    setupPagination();
    setNumberDiv();
  });

  button_list.addEventListener("click", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => (item.style.display = "none"));

    _galleryType = 1;
    renderGalleryItems(_data, currentPage);
    setupPagination();
    setNumberDiv();
  });
});
