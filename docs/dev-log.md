## Dev-log Do we still have

### 18/8/2026
- Reworked file structure.
- Created 'dev-log.md' and 'readme.md'.
- Started refactoring 'index.js' from DOM-only manipulation to an object-based approach.

### Progress
- Section creation is functional.
- New sections are stored as objects inside 'sectionArray'.
- Created sections are rendered as clickable buttons.
- Clicking a section sets it as active ('currentSectionID').
- Clicking a section displays the item creation form.

#### Learning
- better understanding of objects and arrays.
- Learned to seperate application state from DOM rendering.
- Introduced a simple render funcion ('renderSections()).
- Began working with dynamic event listeners for generated elements

#### Next steps
- Make item creation append items to the correct section.
- Render items belonging to the active section.
- Refactor section creation into a dedicated 'addSection()' function.
- Write logic to render buttons to increase and decrease the amount value of the items and make it functional.

### 20/8/2026

### Progress
- Added item functionality
- created buttons to increase and decrease item value
- the active sections render the items belonging to them with the correct values
- added some very basic CSS

#### Learning
- Increasing experience with building more complicated objects
- Learning how to build more complicated functions
- Learning how to make functions work together more practically

#### Next steps
- integrate localStorage
- include a function that colours the items red once depleted
- add delete buttons
- add edit buttons