document.addEventListener("DOMContentLoaded", function () {
  // Find the list of buttons by their parent ID
  const buttons = document.querySelectorAll(
    "#button-list-gallery .btn-gallery"
  );

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

  const button = document.getElementById("btn-RETAIL");
  const button1 = document.getElementById("btn-IMPRESSION");

  console.log("btn-RETAIL", button);

  // Add a click event listener to the selected element
  button.addEventListener("click", () => {
    // Change the class of the element to 'left-block2'
    leftContent.className = "left-filter";

    console.log("left-filter", leftContent);

    leftContent.innerHTML = `
           <ul>
              <li>
                <a class="title">Thương Hiệu</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Thương Hiệu"
                  placeholder="Chọn Thương Hiệu"
                  list="brand-list"
                />
                <datalist id="brand-list">
                  <option value="Nike"></option>
                  <option value="Adidas"></option>
                  <option value="Puma"></option>
                  <option value="Converse"></option>
                  <option value="Vans"></option>
                  <option value="New Balance"></option>
                  <option value="Fila"></option>
                </datalist>
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

    console.log("left-Content-inner", leftContent);
  });

  button1.addEventListener("click", () => {
    // Change the class of the element to 'left-block2'
    leftContent.className = "left-filter";

    console.log("left-filter", leftContent);

    leftContent.innerHTML = `
          <ul>
              <li>
                <a class="title">Máy Quét</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Máy Quét"
                  placeholder="Curent-User"
                  list="user-list"
                />
                <datalist id="user-list">
                  <option value="User1"></option>
                  <option value="User2"></option>
                  <option value="User3"></option>
                  <option value="User4"></option>
                  <option value="User5"></option>
                  <option value="User6"></option>
                  <option value="User7"></option>
                </datalist>
              </li>
              <li>
                <a>Loại Dữ Liệu</a>
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
                <a class="title2">Số Vụ/Sự Cố</a>
                <input
                  class="text-input"
                  type="text"
                  id="username"
                  name="Số Vụ"
                  placeholder="Nhập số vụ việc"
                />
              </li>
            </ul>`;

    console.log("left-Content-inner", leftContent);
  });
});
