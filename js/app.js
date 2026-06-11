// -----------------------------
// Load categories from storage
// -----------------------------
function loadCategories() {
  return JSON.parse(localStorage.getItem("categories")) || {};
}

// -----------------------------
// Save categories to storage
// -----------------------------
function saveCategories(categories) {
  localStorage.setItem("categories", JSON.stringify(categories));
}

// -----------------------------
// Render category list on home
// -----------------------------
function renderCategoryList() {
  const categories = loadCategories();
  const list = document.getElementById("category-list");

  list.innerHTML = "";

  Object.keys(categories).forEach(categoryName => {
    const li = document.createElement("li");
    li.style.position = "relative"; // BELANGRIJK voor menu-positie

    li.innerHTML = `
      <span class="cat-name">${categoryName}</span>
      <button class="cat-menu-btn">⋮</button>
    `;

    // Klik op naam → open categorie
    li.querySelector(".cat-name").onclick = () => {
      window.location.href = `category.html?name=${encodeURIComponent(categoryName)}`;
    };

    // Klik op menu → opties tonen
    li.querySelector(".cat-menu-btn").onclick = (e) => {
      e.stopPropagation(); // voorkomt openen van categorie
      showCategoryMenu(categoryName, e.target);
    };

    list.appendChild(li);
  });
}

// -----------------------------
// Add new category
// -----------------------------
function addCategory() {
  const name = prompt("Category name:");

  if (!name) return;

  const categories = loadCategories();

  if (categories[name]) {
    alert("This category already exists.");
    return;
  }

  categories[name] = []; // lege itemlijst
  saveCategories(categories);
  renderCategoryList();
}

// -----------------------------
// Event listener for button
// -----------------------------
document.getElementById("add-category-btn").onclick = addCategory;

// -----------------------------
// Category menu (rename/delete)
// -----------------------------
function showCategoryMenu(categoryName, anchorElement) {
  // Verwijder oude menu's
  const oldMenu = document.querySelector(".cat-options");
  if (oldMenu) oldMenu.remove();

  const menu = document.createElement("div");
  menu.classList.add("cat-options");

  menu.innerHTML = `
    <button class="rename-btn">Rename</button>
    <button class="delete-btn">Delete</button>
  `;

  anchorElement.parentElement.appendChild(menu);

  // Rename
  menu.querySelector(".rename-btn").onclick = () => {
    renameCategory(categoryName);
    menu.remove();
  };

  // Delete
  menu.querySelector(".delete-btn").onclick = () => {
    deleteCategory(categoryName);
    menu.remove();
  };
}

// -----------------------------
// Rename category
// -----------------------------
function renameCategory(oldName) {
  const newName = prompt("New category name:", oldName);

  if (!newName || newName === oldName) return;

  const categories = loadCategories();

  if (categories[newName]) {
    alert("A category with that name already exists.");
    return;
  }

  categories[newName] = categories[oldName];
  delete categories[oldName];

  saveCategories(categories);
  renderCategoryList();
}

// -----------------------------
// Delete category
// -----------------------------
function deleteCategory(name) {
  if (!confirm(`Delete category "${name}"?`)) return;

  const categories = loadCategories();
  delete categories[name];

  saveCategories(categories);
  renderCategoryList();
}

// -----------------------------
// Start
// -----------------------------
renderCategoryList();
