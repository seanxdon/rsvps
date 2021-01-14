// set form var
let form = document.querySelector('#registrar');
// set input var
let input = form.querySelector('input');
//set ul var
const ul = document.querySelector('#invitedList');

//Creating Li elements
function createLI(text) {
	//Creating an li of invitees
	const li = document.createElement('li');
	li.textContent = text;

	//Label 'Confirmed' created from the DOM
	const label = document.createElement('label');
	label.textContent = 'Confirmed';

	//Checkbox created from DOM
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);

	//Remove button created from the DOM
	const button = document.createElement('button');
	button.textContent = 'remove';
	li.appendChild(button);

	return li;
}

//form submistion func
form.addEventListener('submit', (e) => {
	e.preventDefault();

	//input value stored and string is reset
	const text = input.value;
	input.value = '';

	const li = createLI(text);
	//add li Element
	ul.appendChild(li);
});

//checkbox
ul.addEventListener('change', (e) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	//tarverse up the DOM to the li
	const listItem = checkbox.parentNode.parentNode;

	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});

//button
ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});
