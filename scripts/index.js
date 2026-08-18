
//this is the array that all te sections end up in
let sectionArray = [];
let currentSectionId = null;

function renderSections() {
    console.log('Rendering sections...');
    const container = document.getElementById('sections-container');
    container.innerHTML = '';

    sectionArray.forEach(section => {
        const button = document.createElement('button');
        button.textContent = section.title;

        container.appendChild(button);

        button.addEventListener('click', () => {
    currentSectionId = section.id;

document.getElementById('new-item')
.style.display = 'block';
});
    });
};

//SECTION LOGIC
document.getElementById('submit-section')
.addEventListener('click', function(event) {
    event.preventDefault();
    //this is the object that holds the sections
    const title = document.getElementById('section-title').value;
    const newSection = {
    id: 'sec-' + Date.now(),
    title: title,
    items: []
}
console.log(newSection);
document.getElementById('section-title').value = '';
sectionArray.push(newSection);
renderSections();

console.log('Current array', sectionArray);
});

//ITEM LOGIC

document.getElementById('submit-item')
.addEventListener('click', function(event) {
    event.preventDefault();
    //this is the object that holds the items
    const name = document.getElementById('item-name').value;
    const section = sectionArray.find(
        sec => sec.id === currentSectionId);
    const item = {
    id: 'item-' + Date.now(),
    name: name,
    amount: 0
}
document.getElementById('item-name').value = '';
section.items.push(item);
renderSections();
});

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

//NEW LOGIC FOR OBJECT BASED SECTIONS AND ITEMS
//ADD NEW SECTION
function addSection(title) {
    const newSection = {
        id: 'sec-' + Date.now(),
        title: title,
        items: []
    };
    appData.sections.push(newSection);
    renderApp();
};

//add item to a specific section
function addItem(sectionId, itemName) {
    const section = appData.sections.find(sec => sec.id === sectionId);

    if (section) {
        section.items.push({
            id: 'item-' + Date.now(),
            name: itemName,
            value: 0
        });
        renderApp();
    }
};

//change value of a specific item in a specific section
function changeItemValue(sectionId, itemId, change) {
    const section = appData.sections.find(sec => sec.id === sectionId);

    if (section) {
        const item = section.items.find(it => it.id === itemId);
        if (item) {
            item.value += change;
            if (item.value < 0) item.value = 0;
            renderApp();
        }
    }
};
