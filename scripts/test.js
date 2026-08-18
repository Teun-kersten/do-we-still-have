//this is the array that all te sections end up in
let sectionArray = [];

//this is the object that holds the sections
const newSection = {
    id: 'sec-' + Date.now(),
    title: title,
    items: []
}

sectionArray.push(newSection);

//this is the object that holds the items
const item = {
    id: 'item-' + Date.now(),
    name: name,
    amount: 0
}

/* under here is the code that will be used to link
the buttons from the forms in index.html to the
functions in index.js */

const sectionForm = document.getElementById('section-form');

sectionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('section-title').value;
    addSection(title);
    sectionForm.reset();
}