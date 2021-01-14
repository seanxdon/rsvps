// set form var
let form = document.querySelector('#registrar');
// set input var
let input = form.querySelector('input');
//form submistion func
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';
	const ul = document.querySelector('#invitedList');
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
});
