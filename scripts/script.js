const addBtn = document.querySelector('.add_item_button');
const clearBtn = document.querySelector('.clear_list_button');
const addItemInput = document.querySelector('.add-item-input-field');
const ul = document.querySelector('.ul_for_list_gen');
let li = document.createElement('li');


addBtn.addEventListener('click', () => {
	let ul = document.querySelector('.ul_for_list_gen');
  let li = document.createElement('li');
  li.className += "listItem";
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

clearBtn.addEventListener('click', () => {
	let ul = document.querySelector('.ul_for_list_gen');
  let li = document.querySelector('li');
  	if (li.parentNode) {
    	while ( ul.firstChild ) {
  			ul.removeChild( ul.firstChild );
			}
    } else {}
});












