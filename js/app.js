// IFFEE
document.addEventListener('DOMContentLoaded', () => {
	// set form var
	let form = document.querySelector('#registrar');
	// set input var
	let input = form.querySelector('input');

	const mainDiv = document.querySelector('.main');
	//set ul var
	const ul = document.querySelector('#invitedList');

	//div with filter checkbox
	const div = document.createElement('div');
	const filterLabel = document.createElement('label');
	const filterCheckBox = document.createElement('input');

	filterLabel.textContent = "Hide those who haven't responded";
	filterCheckBox.type = 'checkbox';
	div.appendChild(filterLabel);
	div.appendChild(filterCheckBox);
	mainDiv.insertBefore(div, ul);

	filterCheckBox.addEventListener('change', (e) => {
		const isChecked = e.target.checked;
		const lis = ul.children;
		if (isChecked) {
			for (let i = 0; i < lis.length; i++) {
				let li = lis[i];
				if (li.className === 'responded') {
					li.style.display = '';
				} else {
					li.style.display = 'none';
				}
			}
		} else {
			for (let i = 0; i < lis.length; i++) {
				let li = lis[i];
				li.style.display = '';
			}
		}
	});
	//Creating Li elements
	function createLI(text) {
		function createElement(elementName, property, value) {
			const element = document.createElement(elementName);
			element[property] = value;
			return element;
		}

		//Creating an li of invitees
		const li = document.createElement('li');

		//edit button span
		const span = createElement('span', 'textContent', text);
		li.appendChild(span);

		//Label 'Confirmed' created from the DOM
		const label = createElement('label', 'textContent', 'Confirmed');
		li.appendChild(label);

		//Checkbox created from DOM
		const checkbox = createElement('input', 'type', 'checkbox');
		label.appendChild(checkbox);
<<<<<<< HEAD

		//Remove button created from the DOM
		const editButton = createElement('button', 'textContent', 'edit');
		li.appendChild(editButton);

		const removeButton = createElement('button', 'textContent', 'remove');

=======

		//Remove button created from the DOM
		const editButton = createElement('button', 'textContent', 'edit');
		li.appendChild(editButton);

		const removeButton = createElement('button', 'textContent', 'remove');

>>>>>>> parent of f3696ad... 01202021: appendingLI function refactored
		li.appendChild(removeButton);
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
			const button = e.target;
			const li = button.parentNode;
			const ul = li.parentNode;

			//button with class name remove
			if (e.target.textContent === 'remove') {
				ul.removeChild(li);
				//button with class name edit
			} else if (button.textContent === 'edit') {
				const span = li.firstElementChild;
				const input = document.createElement('input');
				input.type = 'text';
				input.value = span.textContent;
				li.insertBefore(input, span);
				li.removeChild(span);
				button.textContent = 'save';
				//button with class name save
			} else if (button.textContent === 'save') {
				const input = li.firstElementChild;
				const span = document.createElement('span');
				span.textContent = input.value;
				li.insertBefore(span, input);
				li.removeChild(input);
				button.textContent = 'edit';
			}
		}
	});
});
