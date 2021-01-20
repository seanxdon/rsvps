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

		function appendToLi(elementName, property, value) {
			const element = createElement(elementName, property, value);
			li.appendChild(element);
			return element;
		}
		//Creating an li of invitees
		const li = document.createElement('li');

		//edit button span
		appendToLi('span', 'textContent', text).appendChild(
			//Checkbox created from DOM
			createElement('input', 'type', 'checkbox')
		);
		//edit button appended to li
		appendToLi('button', 'textContent', 'edit');
		//Remove button appended to li
		appendToLi('button', 'textContent', 'remove');

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
