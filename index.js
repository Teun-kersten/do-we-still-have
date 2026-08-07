//This section makes sure the new section form is hidden when the page loads and shows it when the create section button is clicked.
document.getElementById('new-section').style.display = 'none';
document.getElementById('create-section').addEventListener('click', function() {
    document.getElementById('new-section').style.display = 'block';
});
//This section makes sure the new item form is hidden when the page loads and shows it when the cancel button is clicked.
document.getElementById('new-item').style.display = 'none';
document.getElementById('cancel-form').addEventListener('click', function() {
    document.getElementById('new-section').style.display = 'none';
});
//SECTION LOGIC
document.getElementById('submit-section').addEventListener('click', function(event) {
    event.preventDefault();
    let sectionName = document.getElementById('section-title').value;
    document.getElementById('new-section').style.display = 'none';
    let newButton = document.createElement('button');
    newButton.textContent = sectionName;
    newButton.addEventListener('click', () => {
        document.getElementById('new-item').style.display = 'block';
    });
    const main = document.querySelector('main');
    main.appendChild(newButton);
    const section = document.querySelector('section');
});
//ITEM LOGIC
document.getElementById('submit-item').addEventListener('click', function(event) {
    event.preventDefault();
    const itemContainer = document.createElement('div');
    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.onclick = function() {
    itemAmount.textContent = parseInt(itemAmount.textContent) - 1;
};
    itemContainer.appendChild(minusButton);
    const itemName = document.createElement('span');
    itemName.textContent = document.getElementById('item-title').value;
    itemContainer.appendChild(itemName);
    const itemAmount = document.createElement('span');
    itemAmount.textContent = 0;
    itemContainer.appendChild(itemAmount);
    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.onclick = function() {
    itemAmount.textContent = parseInt(itemAmount.textContent) + 1;
};
    itemContainer.appendChild(plusButton);
    document.getElementById('new-item').style.display = 'none';
    const main = document.querySelector('main');
    main.appendChild(itemContainer);
});

