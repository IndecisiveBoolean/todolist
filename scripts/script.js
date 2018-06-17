const incompleteListDiv = document.querySelector('.listItem');
const addItemInput = document.querySelector('input.addItemInputField');
const listItemContainer = document.querySelector('div.listItemContainer');

const addItemButton = document.querySelector('.addItemButton');
const clearListButton = document.querySelector('.clearListButton');



listItemContainer.addEventListener('click', (event) => {
// checks to see what button was clicked on the generated LI in the UL
  if (event.target.tagName == 'BUTTON') {
    console.log("delete button was clicked");
    let button = event.target;
    let li = button.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  } else if (event.target.tagName == 'INPUT') {
    console.log("checkbox was clicked");
    let checkedItem = event.target;
    let li = checkedItem.parentNode;
    
    if (checkedItem.checked) {
        checkedItem.checked = true;
        li.style.textDecoration = 'line-through';
        li.style.color = 'lightgrey';
        // moveCompletedTask(checkedItem);
        
        } else {
          li.style.textDecoration = 'none';
          li.style.color = 'black';
        }
  }
});

//generates the Add Item, Clear List, Checkbox, and DELETE buttons and creates the LI elements using the Add Item button and checks the value of the INPUT field. If field is empty an alert is triggered.
addItemButton.addEventListener('click', () => {
  let ul = document.querySelectorAll('ul')[0];
  if (addItemInput.value === '') {
      alert("Please specify a task to be added to the list.");
      } else {
          if (document.querySelector('div.examplesContainer')) {
            document.querySelector('div.examplesContainer').style.display = "none";
          }
          let li = document.createElement('li');
          let removeItemButton = document.createElement('button');
          let checkBox = document.createElement('input');
          removeItemButton.className += "removeItemButton";
          removeItemButton.textContent = "DELETE";
          checkBox.type = "checkbox";
          checkBox.name = "markComplete";
          checkBox.className = "checkBox";
          checkBox.value = "unchecked";
          li.className += "listItem";
          li.textContent = addItemInput.value;
          ul.appendChild(li);
          li.appendChild(removeItemButton);
          li.appendChild(checkBox);
          addItemInput.value = '';
      }
});

//Deletes all content generated within the UL's
clearListButton.addEventListener('click', () => {
  let ul = document.querySelectorAll('ul')[0];
  let li = document.querySelector('li');
  	if (ul.parentNode) {
    	while ( ul.firstChild ) {
  			ul.removeChild( ul.firstChild );
			}
    } else {}
});

