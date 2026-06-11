// Haal de categorie uit de URL
const params = new URLSearchParams(window.location.search);
const categoryName = params.get("name");
document.getElementById("category-title").textContent = categoryName;

// Items laden en opslaan
function loadItems(category) {
  const data = JSON.parse(localStorage.getItem("categories")) || {};
  return data[category] || [];
}

function saveItems(category, items) {
  const data = JSON.parse(localStorage.getItem("categories")) || {};
  data[category] = items;
  localStorage.setItem("categories", JSON.stringify(data));
}

// Stock level bepalen
function getStockLevelClass(qty) {
  if (qty <= 1) return "low";
  if (qty <= 4) return "medium";
  return "high";
}

// Qty display updaten
function updateQtyDisplay(qtyElement, newQty) {
  qtyElement.textContent = newQty;

  qtyElement.classList.remove("low", "medium", "high");
  qtyElement.classList.add(getStockLevelClass(newQty));
}

// Item renderen
function renderItem(item, index, items) {
  const li = document.createElement("li");

  const levelClass = getStockLevelClass(item.qty);

  li.innerHTML = `
    <span>${item.name}</span>
    <div class="item-controls">
      <button class="btn-minus">-</button>
      <span class="item-qty ${levelClass}">${item.qty}</span>
      <button class="btn-plus">+</button>
    </div>
  `;

  const btnMinus = li.querySelector(".btn-minus");
  const btnPlus = li.querySelector(".btn-plus");
  const qtySpan = li.querySelector(".item-qty");

  btnMinus.onclick = () => {
    if (item.qty > 0) {
      item.qty--;
      updateQtyDisplay(qtySpan, item.qty);
      saveItems(categoryName, items);
    }
  };

  btnPlus.onclick = () => {
    item.qty++;
    updateQtyDisplay(qtySpan, item.qty);
    saveItems(categoryName, items);
  };

  return li;
}

// Lijst renderen
function renderList() {
  const items = loadItems(categoryName);
  const list = document.getElementById("item-list");

  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = renderItem(item, index, items);
    list.appendChild(li);
  });
}

// -----------------------------
// ADD ITEM OVERLAY
// -----------------------------

const addModal = document.getElementById("add-modal");
const openAddBtn = document.getElementById("open-add-modal");
const closeAddBtn = document.getElementById("close-modal-btn");
const saveItemBtn = document.getElementById("save-item-btn");

openAddBtn.onclick = () => {
  addModal.classList.remove("hidden");
};

closeAddBtn.onclick = () => {
  addModal.classList.add("hidden");
};

saveItemBtn.onclick = () => {
  const nameInput = document.getElementById("new-item-name");
  const qtyInput = document.getElementById("new-item-qty");

  const name = nameInput.value.trim();
  const qty = parseInt(qtyInput.value);

  if (!name || isNaN(qty)) {
    alert("Please enter a name and quantity.");
    return;
  }

  const items = loadItems(categoryName);

  items.push({
    name: name,
    qty: qty
  });

  saveItems(categoryName, items);
  renderList();

  // Velden leegmaken
  nameInput.value = "";
  qtyInput.value = "";

  // Overlay sluiten
  addModal.classList.add("hidden");
};

// Start
renderList();
