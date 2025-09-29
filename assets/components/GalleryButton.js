let dataShoes = [
  "Nike",
  "Adidas",
  "Puma",
  "New Balance",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pineapple",
];

let _galleryType = 0; //grid 1 //table

let dataUser = ["u1", "u2", "u3", "u4"];
document.addEventListener("DOMContentLoaded", function () {
  // Find the list of buttons by their parent ID
  const buttons = document.querySelectorAll("#button-list-gallery .btn-galery");
  console.log(buttons);
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

document.addEventListener("DOMContentLoaded", () => {
  // Get the outer div with the class 'left-block'
  const leftBlock = document.querySelector(".left-block");

  // Get the inner div with the class 'left-content'
  const leftContent = document.querySelector(".left-filter");

  const button_RETAIL = document.getElementById("btn-RETAIL");
  const button_IMPRESSION = document.getElementById("btn-IMPRESSION");

  const button_grid = document.getElementById("btn-grid");
  const button_list = document.getElementById("btn-list");

  console.log("btn-RETAIL", button_RETAIL);

  // Add a click event listener to the selected element
  button_RETAIL.addEventListener("click", () => {
    // Change the class of the element to 'left-block2'
    leftContent.className = "left-filter";

    console.log("left-filter", leftContent);

    // Sample data to be searched

    leftContent.innerHTML = `
            <ul>
              <li>
                <a class="title">Thương Hiệu</a>
                <div class="search-container">
                   <input type="text" id="searchInput" placeholder="Search..." />
                   <ul id="searchList" class="search-list"></ul>
                </div> 
              </li>
              <li>
                <a class="title">Loại</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Loại"
                  placeholder="Nhập Loại Giày"
                />
              </li>
              <li>
                <a class="title">Mẫu</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Mẫu"
                  placeholder="Nhập Mẫu"
                />
              </li>
              <li>
                <a class="title">ID Sản Phẩm</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="ID Sản Phẩm"
                  placeholder="Nhập ID Sản Phẩm"
                />
              </li>
            </ul>`;

    LoadData(dataShoes);

    console.log("left-Content-inner", leftContent);
  });

  button_IMPRESSION.addEventListener("click", () => {
    // Change the class of the element to 'left-block2'
    leftContent.className = "left-filter";

    console.log("left-filter", leftContent);

    leftContent.innerHTML = `
          <ul>
              <li>
                <a class="title">Máy Quét</a>
               <div class="search-container">
                   <input type="text" id="searchInput" placeholder="Search..." />
                   <ul id="searchList" class="search-list"></ul>
                </div> 
              </li>
              <li>
                <a class="title">Loại Dữ Liệu</a>
                <div class="checkbox-group">
                  <label>
                    <input type="checkbox" value="2" />Dấu Vết Thu Hồi</label
                  >
                  <label>
                    <input type="checkbox" value="3" />Giày Thử Nghiệm</label
                  >
                </div>
              </li>
              <li>
                <a class="title">Số Vụ/Sự Cố</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Số Vụ"
                  placeholder="Nhập số vụ việc"
                />
              </li>
            </ul>`;

    LoadData(dataUser);

    console.log("left-Content-inner", leftContent);
  });

  // button_grid.addEventListener("click", () => {
  //   const galleryContainer = document.querySelector(".gallery-container");
  //   galleryContainer.style.display = "grid";

  //   const galleryItems = document.querySelectorAll(".gallery-item");
  //   galleryItems.forEach((item) => (item.style.display = "flow"));

  //   const galleryData = document.querySelectorAll(".gallery-data");
  //   galleryData.forEach((item) => (item.style.display = "flow"));

  //   _galleryType = 0;
  // });

  // button_list.addEventListener("click", () => {
  //   _galleryType = 1;
  //   const galleryItems = document.querySelectorAll(".gallery-item");
  //   galleryItems.forEach((item) => (item.style.display = "none"));
  // });
});

function LoadData(data) {
  const searchInput = document.getElementById("searchInput");
  const searchList = document.getElementById("searchList");

  // Function to render the list items
  const renderList = (items) => {
    searchList.innerHTML = ""; // Clear previous results
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      searchList.appendChild(li);
    });
  };

  // 1. Show the list on click
  searchInput.addEventListener("click", () => {
    renderList(data);
    searchList.classList.add("show");
  });

  // 2. Filter the list as the user types
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query)
    );
    renderList(filteredData);
    searchList.classList.add("show");
  });

  // 3. Select an item from the list
  searchList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      searchInput.value = event.target.textContent;
      searchList.classList.remove("show");
    }
  });

  // 4. Hide the list when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
      searchList.classList.remove("show");
    }
  });
}

//LoadData_RETAIL
document.addEventListener("DOMContentLoaded", () => {
  LoadData(dataShoes);
});
